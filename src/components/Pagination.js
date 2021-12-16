import React from 'react'

const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {  
let pageButtons = []  

for (let i = 1; i <= pages; i++) {  
  pageButtons.push(<button key={i} className="btn btn-outline-dark" onClick={() => goToPage(i)}>{i}</button>)
}  
return (    
  <div>      
    {prevPage && (<button className="btn btn-outline-primary" onClick={prevPage}>Previous</button>)}      
    {pageButtons}      
    {nextPage && (<button className="btn btn-outline-primary" onClick={nextPage}>Next</button>)}    
  </div>  )
}

export default Pagination