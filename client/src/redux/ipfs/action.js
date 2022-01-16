import { create } from "ipfs-http-client";


export const INIT_IPFS = "INIT_IPFS";

export const initIPFS = () => async (dispatch) => {
  const localIPFS = await create({family: 4, host: "127.0.0.1", transport: "tcp", port: 5001});
  dispatch({ type: INIT_IPFS, payload: { localIPFS }});
}
