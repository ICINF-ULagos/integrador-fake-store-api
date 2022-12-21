import './TodoCard.css'
import { useContext, useState } from 'react'
import useProduct from '../../../hooks/useProduct'
import CartContext from '../../../context/cart/CartContext'






const TodoCard = (props) => {

    const {addToCart} = useContext(CartContext)

    return (
        <>
    
        <div className="card">
            <img className="card__img" src={props.image} alt="" />
            <div>
                <h2>{props.category}</h2>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <div className="card-price-add">
            
                <span>Price : ${props.price}</span>
                <button onClick={() =>addToCart(props)} type="button" className="btn btn-success">Agregar producto</button>
                
            </div>
        </div>
        </>
        
    )
} 


export default TodoCard;
