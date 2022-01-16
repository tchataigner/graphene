import { applyMiddleware, combineReducers, createStore } from 'redux';
import { usersReducer } from "./users/reducer";
import { ethReducer } from "./ethereum/reducer";
import { IPFSReducer } from "./ipfs/reducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


export const store = createStore(
  combineReducers(
    {
      users: usersReducer,
      eth: ethReducer,
      ipfs: IPFSReducer
    }
  ),
  composedEnhancer)
