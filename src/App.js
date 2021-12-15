import React, {useEffect,useState} from 'react';

import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav/"
import Cards from './components/Cards'
import Pagination from "./components/Pagination";


function App() {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
		const getCharacteres = async () => {
      
			const response = await fetch("https://rickandmortyapi.com/api/character/?page=10")

			const data = await response.json()
			
      setCharacter(data.results)

		}
		getCharacteres()
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
          <Nav />
      
      {
      character.map((characteres) =>{
        return(
          <Cards 
            id={characteres.id}
            image={characteres.image}
            name={characteres.name}
            status={characteres.status}
            species={characteres.species}
          />  
        )})
      }
      <Pagination />
      </header>
    </div>
  );
}

export default App;
