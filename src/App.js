import React, {useEffect,useState} from 'react';
import './App.css';
import Cards from './components/Cards'
import Pagination from "./components/Pagination";

function App() {

	const [loading, setLoading] = useState(true)
	const [characters, setCharacters] = useState([])
	const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
	const [nextPageUrl, setNextPageUrl] = useState()
	const [prevPageUrl, setPrevPageUrl] = useState()
	const [pages, setPages] = useState()

	useEffect(() => {  
		const url = currentPageUrl  
		setLoading(true)  

		const fetchData = async () => {    
			const res = await fetch(url);    
			const data = await res.json();

			setCharacters(data.results)    
			setLoading(false);    
			setNextPageUrl(data.info.next);    
			setPrevPageUrl(data.info.prev);    
			setPages(data.info.pages)  
	}  
		fetchData();
	},[currentPageUrl])

	function nextPage() {
		setCurrentPageUrl(nextPageUrl)
	}

	function prevPage() {
		setCurrentPageUrl(prevPageUrl)
	}

	function goToPage(num) {
		setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)}
		if (loading) 
			return "Loading..."
			const charList = characters.map(char => 
			<Cards key={Math.floor(Math.random() * 10000)} 
				name={char.name} 
				img={char.image}
				species={char.species}
				status={char.status}
			/>)

		return (  
			<div className="App">    
			<Pagination    
				nextPage={nextPageUrl ? nextPage : null}    
				prevPage={prevPageUrl ? prevPage : null}    
				goToPage={goToPage}    
				pages={pages}  />  
			<div className="d-flex justify-content-center">
				<div>{charList}</div>    
			</div>  
			<Pagination    
				nextPage={nextPageUrl ? nextPage : null}    
				prevPage={prevPageUrl ? prevPage : null}    
				goToPage={goToPage}    
				pages={pages}  
			/>
			</div>);
}

export default App;
