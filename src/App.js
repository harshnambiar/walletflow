import logo from './logo.svg';
import './App.css';
import {authenticate, unauthenticate} from './index.js';

function App() {
  return (
    <div className="App">
      <div className='wallet' align="left">

        <div className="button" onClick={authenticate}>Sign In!</div>
        <div className="button" onClick={unauthenticate}>Sign Out!</div>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <a
          className="App-link"
          href="https://dev.to/maxstalker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to the World of FLOW!
        </a>
      </header>
    </div>
  );
}

export default App;
