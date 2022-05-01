import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PackageDetails = () => {
    const { packageId } = useParams();
    return (
        <div className='text-center'>
            <h2 className='m-5'>Happy Tour : {packageId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-dark'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default PackageDetails;