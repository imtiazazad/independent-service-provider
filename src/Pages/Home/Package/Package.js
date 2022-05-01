import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css'

const Package = ({ pack }) => {
    const {id, img, description, duration, price } = pack;
    const navigate = useNavigate();

    const navigateToPackageDetails = id => {
        navigate(`/package/${id}`);
    }
    return (
        <div className='g-2 col-12 col-md-6 col-lg-4'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Destination & Duration: </h5> <p>{duration}</p>
                    <h5 className="card-title">Price: $ {price}</h5>
                    <p className="card-text description"><span className='fw-bold'>Description:</span> {description}</p>
                    <button onClick={ () => navigateToPackageDetails(id)} className="btn btn-dark">Book Now</button>
                </div>
            </div>
        </div>  

    );
};

export default Package;