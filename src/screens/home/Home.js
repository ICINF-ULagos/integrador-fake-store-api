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
            
            <header style={{ minHeight: '15rem'}} className="App-header">
                <nav className='navbar navbar-expand-lg navbar-light' style={{background: 'white', paddingRight: '30px', width: '100%', borderRadius: '20px'}}>
                    <div >
                        <p style={{ margin: '30px', color: '#4285f4', fontFamily: 'cursive', fontSize: '50px'}}>
                            Fake Store
                        </p>
                    </div>
                    <input onChange={Filtro}   placeholder="Buscador" style={{ marginRight: '200px'}}/>
                    <div style={{ left:'200px'}}>
                        <div>
                        Tu Carro de productos:
                        <span style={{ height: '40px', width: '40px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block', marginLeft: '10px', color: 'white'}}>
                            0</span>
                        </div>
                        <a href="#">Comprar</a>
                    </div>
                </nav>
            </header>
            <div style={{ height: 'auto', width: '1200px'}}>
            {
                loadingProducts ? <p style={{ color: 'black' }}>Loading...</p>
                : <ProductBoard products={results} />
            
            }
            
            </div>
        </>
    )
}

export default Home;

