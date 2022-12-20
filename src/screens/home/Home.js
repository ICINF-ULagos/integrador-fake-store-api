import { useEffect } from 'react'
import ProductBoard from './components/ProductBoard'
import useProduct from '../../hooks/useProduct';
import useUser from '../../hooks/useUser';



function Home() {
    const { data: products, loading: loadingProducts, getAll: getAllProducts} = useProduct();
    const {token: tokenuser} = useUser();
    
    useEffect(() => {
        getAllProducts();
        console.log(products)
    }, [])

    return (
        <>
            <header style={{ minHeight: '15rem' }} className="App-header">
                <p>
                    home
                </p>
            </header>
            
            
            {
                
                
                //<li >{products}</li> 
                loadingProducts ? <p style={{ color: 'red' }}>Loading...</p>
                : <ProductBoard products={products} />

                
                
            }
        </>
    )
}

export default Home;