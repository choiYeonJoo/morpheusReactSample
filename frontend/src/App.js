import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    // mount 되는 시점에 호출되는 이벤트
    // M.pop.alert('hello world')
    return () => {
      // unmount 되는 시점에 호출되는 이벤트
      
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
