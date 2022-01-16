import { INIT_ETH, DEPLOY_GRAPHENE, MINT_CAP, ESTIMATED_PRICING, RENT } from "./action";

const initialState = {
  ethers: undefined,
  CapContract: undefined,
  grapheneContract: undefined,
  cap: undefined,
  estimatedPrice: "0",
  stakeholdersPricing: {
    "0x08302CF8648A961c607e3e7Bd7B7Ec3230c2A6c5": "0",
    "0x434BE6240f6dC213EbE695EB55a3f07f6C5148E3": "0",
    "0x95eDA452256C1190947f9ba1fD19422f0120858a": "0",
  }
};


export const ethReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_ETH: {
      return action.payload;
    }
    case DEPLOY_GRAPHENE: {
      return {...state, grapheneContract: action.payload.grapheneContract};
    }
    case MINT_CAP: {
      return { ...state, cap: action.payload.cap };
    }
    case ESTIMATED_PRICING: {
      return {...state, estimatedPrice: action.payload.estimatedPrice};
    }
    case RENT: {
      return {...state, stakeholdersPricing: action.payload.stakeholdersPricing};
    }
    default:
      return state;
  }
};
