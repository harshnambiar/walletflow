import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as fcl from "@onflow/fcl";
import { account, query, config, Wallet, logIn } from "@onflow/fcl";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export function loader(){
  fcl.config()
  // connect to Flow testnet
  // for fcl@<1.0.0 this should be https://access-testnet.onflow.org
    .put("accessNode.api", "https://rest-testnet.onflow.org")
    // use pop instead of default IFRAME/RPC option for security enforcement
    .put("discovery.wallet.method", "POP/RPC")
    
    // use Blocto testnet wallet
    .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn")
}


export function authenticate(){
  

    fcl
      .currentUser()
      .subscribe(console.log) // fires everytime account connection status updates
      
    // authenticate
    fcl.authenticate()
}

export function unauthenticate(){
    fcl
      .currentUser()
      .subscribe(console.log) // fires everytime account connection status updates
    
  // unauthenticate and clear account info in FCL
  fcl.unauthenticate()
}

export async function showBal(){
  unauthenticate();

  const wallet = await logIn();
  
  console.log({ wallet });
  
    // We will take only "balance" field from account details
  const { balance } = await account(wallet.addr);
  const flowBalance = balance / Math.pow(10, 8);
  console.log({ flowBalance });
}
