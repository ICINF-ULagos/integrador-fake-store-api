






import useUser from '../../hooks/useUser';

import { useEffect,useState,useContext,useId } from 'react'
import ProductBoard from './components/ProductBoard'
import useProduct from '../../hooks/useProduct';
import Search from './Search'
import './Carrito.css'
import CartContext from '../../context/cart/CartContext';
import { useNavigate } from 'react-router-dom';






function Home() {

    
    const {token: tokenuser, logout: logOut} = useUser();
    const token = localStorage.getItem('Token');


    const { data: products, loading: loadingProducts, getAll: getAllProducts,prueba:productsHooks} = useProduct();


    const id=useId()
    const {cartItems} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)
    
    const [Filter,setFilter] =useState();

    const [active,setActive]= useState(false);
    
    const navigate = useNavigate()



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
    //<span style={{ height: '40px', width: '40px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block', marginLeft: '10px', color: 'white'}}>
     //                       0</span>

    const handle = () =>{
        navigate('/login')
    }
    return (
        <>
            
            <header style={{ minHeight: '15rem'}} className="App-header2">
                <nav className='navbar navbar-expand-lg navbar-light' style={{background: 'white', paddingRight: '30px', width: '100%', borderRadius: '20px'}}>
                    <div >
                        <p style={{ margin: '30px', color: '#4285f4', fontFamily: 'cursive', fontSize: '50px'}}>
                            Fake Store
                        </p>
                    </div>

                    {/* <input onChange={Filtro}   placeholder="Buscador" /> */}
                    {/*  */}
                    

                    <input onChange={Filtro}   placeholder="Buscador" style={{ marginRight: '200px'}}/>
                    <div style={{ left:'200px'}}>
                        <div>
                        <div className="container-icon">
				<div className="container-cart-icon" onClick={()=> setActive(!active)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="icon-cart"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<div className="count-products">
                        {cartItems.length > 0 &&(
                                <span id="contador-productos">{cartItems.length}</span>
                        )}
						
					</div>
				</div>
                
				<div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {
                        cartItems.length ? (
                            <>
                            <div className="row-product">
                                {cartItems.map(producto =>(
                                        <div className="cart-product" key={producto.id}>
                                        <div className="info-cart-product">
                                            <p className="titulo-producto-carrito">{producto.title}</p>
                                            <span className="precio-producto-carrito">${producto.price}</span>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="icon-close"
                                            
                                            onClick={() => removeItem(producto.id)}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                ))}
						
					</div>

					<div className="cart-total">
						<h3>Total:</h3>
						<span className="total-pagar"></span>
					</div>

                    <button className='btn-clear-all' onClick={() => handle()}>Comprar</button>
                            
                            </>
                        ) : (
                            <p className="cart-empty">El carrito está vacío</p>
                        )
                    }
                    
                    
                    
                    
        

                    

				    
				</div>
			</div>

                        </div>
                        
                    </div>

                </nav>
                
                {
                    token!=null ? <button className='btn-borde' onClick={logOut}  >Cerrar sesión</button> : null
                  
                     } 
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

