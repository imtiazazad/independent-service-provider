import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
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

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please Enter Email');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center mt-2'>Please Login</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='mt-3'>New to TWI ? <Link to='/signup' className='text-primary text-decoration-none' onClick={navigateSignUp}>Please Sign Up</Link></p>

            <p className='mt-3'> Forget Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <Social></Social>
            <ToastContainer />
        </div>
    );
};

export default Login;