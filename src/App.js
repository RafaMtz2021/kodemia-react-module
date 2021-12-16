import React, {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'

//import Pagination from "./components/Pagination";

function App() {

  const [character, setCharacter] = useState([]);
	const [prev, setPrev] = useState('')
	const [next, setNext] = useState('')
	const [page, setPage] = useState('page=5')

  useEffect(() => {
		const getCharacteres = async () => {
      
			const response = await fetch(`https://rickandmortyapi.com/api/character/?${page}`)

			const data = await response.json()
			
      setCharacter(data.results)
//*************************************************************
			console.log(data.info);

			const _prevPage = data.info.prev
			console.log(_prevPage);
			const prevPage = _prevPage.split('?')
			console.log(prevPage);
			const previous = prevPage[1]
			console.log(previous);
			setPrev(previous)

			const _nextPage = data.info.next
			console.log(_nextPage);
			const nextPage = _nextPage.split('?')
			console.log(nextPage);
			const fNextPage = nextPage[1]
			console.log(fNextPage);

		}
		getCharacteres()		
	}, [page]);

	const handlePagination = (e) =>{
		if('prev'){
			console.log(e);
			setPage(prev)
		}else{
			console.log(e);
			setPage(next)
		}
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<p className='App-link'>Rick and Morty API</p>
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
      {/* <Pagination /> */}
				<nav aria-label="Page navigation example">
      	  <ul className="pagination fw-bolder">
      	    <li className="page-item">
      	      <a className="page-link" href="javascript:" onClick={(e)=>{handlePagination('prev')}}>
      	        Previous
      	      </a>
      	    </li>

      	    <li className="page-item">
      	      <a className="page-link" href="javascript:" onClick={(e)=>{handlePagination('next')}}>
      	        Next
      	      </a>
      	    </li>
      	  </ul>
      	</nav>
      </header>
    </div>
  );
}

export default App;
