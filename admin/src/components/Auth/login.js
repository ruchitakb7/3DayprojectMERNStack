import React,{useState} from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import "./login.css"
const Login = () => {
 

    return (
        <Container className="mt-5 d-flex justify-content-center login" style={{width:"500px"}} >
            <Form>
                <Row className="justify-content-center">
                    <Form.Group as={Col} md={12} className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-center">
                    <Form.Group as={Col} md={12} className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                           
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Col >
                        <Button className="w-100 mt-2">Login</Button>
                    </Col>
                </Row>
            </Form>
           
        </Container>
    );
};

export default Login;
