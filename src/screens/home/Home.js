import { useEffect } from 'react'
import ProductBoard from './components/Productboard'
import useProduct from '../../hooks/useProduct';


function Home() {
    const { data: products, loading: loadingProducts, getAll: getAllProducts} = useProduct();

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <>
            <header style={{ minHeight: '15rem' }} className="App-header">
                <p>
                    Fake Store
                </p>
            </header>
            {
                //<li key= {products.id}>{products.id}{products.title}{products.price}{products.category}{products.description}{products.image}</li> 
                loadingProducts ? <p style={{ color: 'red' }}>Loading...</p>
                : <ProductBoard products={products} />
            }
        </>
    )
}

export default Home;

