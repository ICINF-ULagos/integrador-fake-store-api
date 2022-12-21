import { useState } from 'react'



function Search(evento,products){
    
    const [Filter,setFilter] =useState();

    setFilter(evento)
    console.log('Si paso por Seach')
    let results = []

    if(!Filter){
      
        results = products
    }
    else{
        results=products.filter((dato) => dato.title.toLowerCase().includes(Filter.toLowerCase()))
      }
    products= results 
    
    return{
        products
    }
        
    

}

export default Search;