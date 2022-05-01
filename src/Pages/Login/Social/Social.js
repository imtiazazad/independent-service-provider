import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'
import Loading from '../../Shared/Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
          
      }

      if(user){
          navigate('/home');
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-dark w-50 opacity-25'></div>
                <p className='mt-2 px-4'>or</p>
                <div style={{height: '1px'}} className='bg-dark w-50 opacity-25'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100'> <img style={{width: '30px'}} src={google} alt="" /> <span className='px-2'>Sign In With Google</span></button>
        </div>
    );
};

export default Social;