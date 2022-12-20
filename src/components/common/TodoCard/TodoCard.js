

const TodoCard = (props) => {


    return (
        <section style={{ 
        border: 'solid 1px',
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
        
        }}>
        <div key={props.id} style={{ display: 'flex', justifyContent: 'space-around', margin: '10px' }}>
            <h2> {props.title} </h2>
            <h2> {props.category} </h2>
            <h2> {props.price} </h2>
            <p> {props.description} </p>
        
        </div>
        </section>
    )
} 

export default TodoCard;