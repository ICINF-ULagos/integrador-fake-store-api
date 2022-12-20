import './TodoCard.css'

const TodoCard = (props) => {


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
            </div>
            <button type="button" className="btn btn-success">Agregar producto</button>
        </div>
        </>
    )
} 

export default TodoCard;