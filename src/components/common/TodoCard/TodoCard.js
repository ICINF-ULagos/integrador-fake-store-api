import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoCard = (props) => {


    return (
        <>
{/*             <div className="card text-center bg-dark animate__animated animate__fadeInUp">
                <div className="overflow">
                    <img src={props.image} alt="a wallpaper" className="card-img-top" />
                </div>
                <div className="card-body text-light">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        {props.description}
                    </p>
                </div>
            </div> */}


        
            <Card className="mb-5"style={{ width: '300rem'}} key={props.id}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body className='w-25 p-3'>
                    <Card.Title className="text-muted"> <h1>{props.title}</h1></Card.Title>
                    <Card.Subtitle className="text-muted">{props.category}</Card.Subtitle>
                    <Card.Text className="text-muted text-center">
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