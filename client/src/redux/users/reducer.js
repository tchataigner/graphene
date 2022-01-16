import { SET_USER } from "./action";
import { Consumer, Issuer, Owner } from "../../utils/constants";

const initialState = {
  list: {
    issuer: Issuer,
    owner: Owner,
    consumer: Consumer
  },
  active: undefined
};


export const usersReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {...state, active: action.payload.active};
    }
    default:
      return state;
  }
};
