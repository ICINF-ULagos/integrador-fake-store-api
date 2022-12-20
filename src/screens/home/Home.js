import { useEffect,useState } from 'react'
import ProductBoard from './components/ProductBoard'
import useProduct from '../../hooks/useProduct';
import Search from './Search'



function Home() {
    const { data: productos, loading: loadingProducts, getAll: getAllProducts, resultsf: productsHooks , Buscador: BuscadorHome} = useProduct();
    
    const [Filter,setFilter] =useState();

    useEffect(() => {
        getAllProducts();
    }, [])

    const Filtro = (e) => {
        setFilter(e.target.value)
        const resul = BuscadorHome(e.target.value, productos) 
      }
      
      //let results = []
      
      //if(!Filter){
      
        //results = products
      //}
      //else{
        //results=products.filter((dato) => dato.title.toLowerCase().includes(Filter.toLowerCase()))
      //}
    
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
                : <ProductBoard products={productos} />
            }
        </>
    )
}

export default Home;