import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger text-center'>ERROR</h1>
            <h2 className='text-center'>Not Found</h2>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;