import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting"
import MyName from "./components/MyName"
import Calculator from './components/Calculator';

function App() {
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
          < Greeting/>
          <MyName name = "Rafa" lastName = "Martínez"/>
          
          <Calculator numbers={[10,35,22,86]} operator={'+'}/>

        </a>
      </header>
    </div>
  );
}

export default App;
