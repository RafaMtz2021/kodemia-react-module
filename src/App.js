import React, {useEffect,useState} from 'react';

import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav/"
import Cards from './components/Cards'
import Pagination from "./components/Pagination";


function App() {

  const [hero, setHero] = useState([]);

  useEffect(() => {
		const getHeroes = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character/?page=4")

			const data = await response.json()
			
      setHero(data.results)

		}
		getHeroes()
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React
          <Nav />
      
      {
      hero.map((heroes) =>{
        return(
          <Cards 
          id={heroes.id}
          image={heroes.image}
          name={heroes.name}
          status={heroes.status}
          species={heroes.species}
          />  
        )})
      }
      <Pagination />
      </header>
    </div>
  );
}

export default App;
