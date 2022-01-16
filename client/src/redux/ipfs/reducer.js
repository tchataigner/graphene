import { INIT_IPFS } from "./action";

const initialState = {
  localIPFS: undefined
};


export const IPFSReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_IPFS: {
      return action.payload;
    }
    default:
      return state;
  }
};
