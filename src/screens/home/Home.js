


import { useEffect,useState } from 'react'

import ProductBoard from './components/ProductBoard'
import useProduct from '../../hooks/useProduct';
import useUser from '../../hooks/useUser';



function Home() {
    const { data: products, loading: loadingProducts, getAll: getAllProducts} = useProduct();
    const {token: tokenuser, logout: logOut} = useUser();
    


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
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <div style={{ margin: '30px', color: '#4285f4', fontFamily: 'cursive', fontSize: '60px'}}>
                        <p>
                            Fake Store
                        </p>
                    </div>
                    <input onChange={Filtro}   placeholder="Buscador" />
                    {/*  */}
                    <button className='btn-borde' onClick={logOut}  >Cerrar sesión</button>
                </nav>
            </header>

            
            
            
                
                
               {/*  <li >{products}</li>  */}
                 {/* loadingProducts ? <p style={{ color: 'red' }}>Loading...</p>
                : <ProductBoard products={products} />
 */}
                

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

