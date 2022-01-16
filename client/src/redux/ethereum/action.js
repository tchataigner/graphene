import { ethers } from "ethers";
import { initIPFS } from "../ipfs/action";
import { CapAbi, CapAddress, GrapheneAbi, GrapheneBytecode } from "../../utils/constants";
import { setUser } from "../users/action";
import cap from "../../assets/img/cap.png";

export const INIT_ETH = "INIT_ETH";
export const DEPLOY_GRAPHENE = "DEPLOY_GRAPHENE";
export const MINT_CAP = "MINT_CAP";
export const ESTIMATED_PRICING = "ESTIMATED_PRICING";
export const RENT = "RENT";

export async function initEth(dispatch, getState) {
  const { issuer } = getState().users.list;
  const provider = new ethers.providers.JsonRpcProvider();
  const CapContract = new ethers.Contract(CapAddress, CapAbi, provider);

  dispatch(initIPFS());
  dispatch(setUser(issuer.pk));
  dispatch({ type: INIT_ETH, payload: {provider, CapContract, stakeholdersPricing: {
        "0x08302CF8648A961c607e3e7Bd7B7Ec3230c2A6c5": "0",
        "0x434BE6240f6dC213EbE695EB55a3f07f6C5148E3": "0",
        "0x95eDA452256C1190947f9ba1fD19422f0120858a": "0",
      }}});
}

export const mintCap = () => async (dispatch,getState) => {
  const signer = getState().users.active;
  const { CapContract, provider } = getState().eth;
  const { localIPFS } = getState().ipfs;

  const connectedSigner = signer.connect(provider);
  const connectedCapContract = CapContract.connect(connectedSigner);

  const capCID = (await localIPFS.add(cap)).path;

  const mintTx = await connectedCapContract.mint(connectedSigner.address, capCID);

  await mintTx.wait();

  const currentTokenId = (await connectedCapContract.currentTokenId()).toString();

  dispatch({ type: MINT_CAP, payload: {cap: {cid: capCID, tokenId: currentTokenId, owner: connectedSigner.address}}});
}


export const deployGraphene = () => async (dispatch,getState) => {
  const signer = getState().users.active;
  const { CapContract, provider, cap } = getState().eth;

  const connectedSigner = signer.connect(provider);

  const grapheneFactory = new ethers.ContractFactory(GrapheneAbi, GrapheneBytecode, connectedSigner);
  console.log(CapContract.address, cap.tokenId);
  const grapheneContract = await grapheneFactory.deploy(CapContract.address, cap.tokenId);

  await grapheneContract.deployTransaction.wait();

  dispatch({ type: DEPLOY_GRAPHENE, payload: {grapheneContract}});
}

export const estimateStoragePricing = (coldReplicas, numberHotReplicas) => async (dispatch, getState) => {
  const signer = getState().users.active;
  const { grapheneContract, provider } = getState().eth;

  const connectedSigner = signer.connect(provider);
  const connectedGrapheneContract = grapheneContract.connect(connectedSigner);

  const estimatedPrice = await connectedGrapheneContract.estimatePricing(coldReplicas, numberHotReplicas);
  console.log(estimatedPrice.toString())
  dispatch({ type: ESTIMATED_PRICING, payload: {estimatedPrice: estimatedPrice.toString()}});
}

export const rent = (coldReplicas, numberHotReplicas) => async (dispatch, getState) => {
  const signer = getState().users.active;
  const { grapheneContract, provider } = getState().eth;
  const { list } = getState().users;

  const connectedSigner = signer.connect(provider);
  const connectedGrapheneContract = grapheneContract.connect(connectedSigner);

  const rentTx = await connectedGrapheneContract.rentStorage(coldReplicas, numberHotReplicas);

  await rentTx.wait();

  let newPrices = {};
  let stakeholders = Object.values(list);
  console.log(stakeholders);
  for (let i = 0; i < stakeholders.length; i++) {
    newPrices[[stakeholders[i].address]] = (await connectedGrapheneContract.currentPricing(stakeholders[i].address)).toString();
  }

  dispatch({ type: RENT, payload: {stakeholdersPricing: newPrices}});
}
