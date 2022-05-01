import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    
  let from = location.state?.from?.pathname || "/";
  let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      if(user){
        navigate(from, { replace: true });
      }

      if (error) {
        errorElement =
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateSignUp = event => {
        navigate('/Signup');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center mt-2'>Please Login</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="dark" type="submit">
                Login
                </Button>
            </Form>
            {errorElement}
            <p className='mt-3'>New to TWI ? <Link to='/signup' className='text-primary text-decoration-none' onClick={navigateSignUp}>Please Sign Up</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;