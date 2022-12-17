import { useEffect,useState } from 'react'
import ProductBoard from './components/ProductBoard'
import useProduct from '../../hooks/useProduct';


function Home() {
    const { data: products, loading: loadingProducts, getAll: getAllProducts} = useProduct();
    const [Filter,setFilter] =useState();
    useEffect(() => {
        getAllProducts();
    }, [])

    const Filtro = (e) => {
        setFilter(e.target.value)
      }
      
      let results = []
      
      if(!Filter){
      
        results = products
      }
      else{
        results=products.filter((dato) => dato.title.toLowerCase().includes(Filter.toLowerCase()))
      }
    
    return (
        <>
            <header style={{ minHeight: '15rem' }} className="App-header">
                <p>
                    home
                </p>
            </header>
            <input onChange={Filtro}   placeholder="Buscador" />

            {
                //<li >{products}</li> 
                loadingProducts ? <p style={{ color: 'red' }}>Loading...</p>
                : <ProductBoard products={results} />
            }
        </>
    )
}

export default Home;