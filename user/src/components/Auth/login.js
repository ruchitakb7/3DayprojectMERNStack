import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import "./login.css"
const Login = () => {
    return( <div className="login">
            <Form>
                <Row className="mb-3">
                    
                        <Col> <Form.Label>Email</Form.Label></Col>
                         <Col md={12}><Form.Control
                            type="email"
                            placeholder="Enter your email"></Form.Control></Col>
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
            <div className="mt-3">
            <p>Don't have Account?<span className="ms-2"><a href="/signup">Signup</a></span></p>
            </div>
           
        </div>
    );
};

export default Login;
