import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import logo2 from '../../../img/images/logo2.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='full_login'>
            <div className='container w-50 mx-auto mt-4'>
                <h2>
                    <img className='logo' src={logo2} alt="" />
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='login-btn container w-50 my-2' type="submit">
                        Submit
                    </Button>
                </Form>
                <p>Firt time at RedOnion? <span onClick={navigateRegister} className='register_text'>Please Register</span></p>
            </div>
        </div>
    );
};

export default Login;