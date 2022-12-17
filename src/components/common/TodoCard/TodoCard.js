import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoCard = (props) => {


    return (


        <>
            <Card ClassName="mb-5"style={{ width: '80rem', height:'150rem' }} key={props.id}>
            <Card.Img variant="top" src={props.image} width="180px" height="800"/>
            <Card.Body>
                <Card.Title className="mb-2 text-muted"><h2> {props.title} </h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.category}</Card.Subtitle>
                <Card.Text className="mb-2 text-muted display-1">
                    {props.description}
                </Card.Text>
                <Card.Text className="mb-2 text-muted">${props.price}</Card.Text>
                <Button variant="secondary">Agregar al carro</Button>
            </Card.Body>
            </Card>
        </>
    )
} 

export default TodoCard;