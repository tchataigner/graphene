import { ethers } from "ethers";

export const SET_USER = "SET_USER";

export const setUser = (privateKey) => async (dispatch) => {
  const ownerWallet = new ethers.Wallet(privateKey);
  console.log(ownerWallet);
  dispatch({ type: SET_USER, payload: {active: ownerWallet}});
}
