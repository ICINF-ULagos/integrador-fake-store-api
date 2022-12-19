import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [message, setMessage] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);
    const navigate = useNavigate();
    const { login, datauser: data } = useUser();

    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData); // PARSE JSON

            //console.log(formValues.username)

            await login(formValues);

            console.log(data)

            if (data.ok) {
                console.log("entro aca")
                sessionStorage.setItem("user", JSON.stringify(formData.username));
                sessionStorage.setItem("token", data);
                setMessage(null)
                navigate('/')
            } else {
                setMessage("error")
            }
    
            //console.log(responseBody)
        } catch (error) {
            console.info(error.message)
            console.error('esto es un error del componente')
            setMessage(error.message)
        }
    }

    return (<div>
        
        <Container className='text-center'>
        
            <Row className=''>
                
                <Col md={{ span: 4, offset: 5 }} className='border p-5 '>
                <h1>Bienvenido a Fake-Store!</h1>
        <h5>Inicia sesión para realizar tus compras  83r5^_</h5>
                    <Form onSubmit={handlerSubmit} className='justify-content-center'>
                        <Form.Group className="mb-3 "  controlId="formBasicEmail">
                            
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Ingresa tu correo" />
                            <Form.Text className="text-muted">
                                
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className=" mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>


        {message && <p>{message}</p>}
    </div>)
}


export default Login;