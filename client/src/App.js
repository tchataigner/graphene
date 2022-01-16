import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import { deployGraphene, estimateStoragePricing, mintCap, rent } from "./redux/ethereum/action";
import { setUser } from "./redux/users/action";

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const eth = useSelector(state => state.eth);
  const { list, active } = useSelector(state => state.users);
  console.log(eth);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./assets/img/cap.png")} alt="cap"/>
        {eth.cap ? <p>Token ID: {eth.cap.tokenId}, CID: {eth.cap.cid} </p> : <span></span> }
        <p>Currently browsing as:</p>
        <select name="users" onChange={e => dispatch(setUser(e.target.value))} value={active.privateKey} >
          {list && Object.entries(list).map(([k, v]) => {
            return (<option value={v.pk}>{k}</option>)
          })}
        </select>
        <br/>
        {active.address == "0x08302CF8648A961c607e3e7Bd7B7Ec3230c2A6c5" ? <button onClick={() => dispatch(mintCap())}>Mint</button> : <span></span>}
        <br/>
        {active.address == "0x08302CF8648A961c607e3e7Bd7B7Ec3230c2A6c5" ? <button onClick={() => dispatch(deployGraphene())}>Deploy</button> : <span></span> }
        <div>
        <label htmlFor="coldReplicas">Store cold replicas</label>
        <input
          type="checkbox"
          name="coldReplicas"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        <input type="number" placeholder="Number of hot replicas" onChange={e => setCount(e.target.value)}/>
        <button onClick={() => dispatch(estimateStoragePricing(checked, count))}>Get Pricing</button>
        </div>
        {eth.estimatedPrice ? <p>{eth.estimatedPrice} wei</p> : <span></span> }
        <button onClick={() => dispatch(rent(checked, count))}>Rent</button>
        <p>Current pricing:</p>
        {eth.stakeholdersPricing && Object.entries(eth.stakeholdersPricing).map(([k, v]) => {
          return (
            <p>{k}: {v}</p>
          )
        })}
      </header>
    </div>
  );
}

export default App;
