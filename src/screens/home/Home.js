import { useEffect } from 'react'
<<<<<<< HEAD
import ProductBoard from './components/Productboard'
=======
import ProductBoard from './components/ProductBoard'
>>>>>>> Diego-Alvarez
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
                    Esto es una prueba de login
                </p>
            </header>
            {
<<<<<<< HEAD
                //<li key= {products.id}>{products.id}{products.title}{products.price}{products.category}{products.description}{products.image}</li> 
=======
                //<li >{products}</li> 
>>>>>>> Diego-Alvarez
                loadingProducts ? <p style={{ color: 'red' }}>Loading...</p>
                : <ProductBoard products={products} />
            }
        </>
    )
}

export default Home;

