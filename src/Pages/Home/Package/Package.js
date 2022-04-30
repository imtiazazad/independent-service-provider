import React from 'react';
import './Package.css'

const Package = ({ pack }) => {
    const { img, description, duration, price } = pack;
    return (
        <div className='g-2 col-12 col-md-6 col-lg-4'>
            <div class="card " style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Destination & Duration: </h5> <p>{duration}</p>
                    <h5 class="card-title">Price: $ {price}</h5>
                    <p class="card-text description"><span className='fw-bold'>Description:</span> {description}</p>
                    <a href="#" class="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>

    );
};

export default Package;