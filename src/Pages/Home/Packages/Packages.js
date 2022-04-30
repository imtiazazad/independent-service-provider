import React, { useEffect, useState } from 'react';
import Package from '../Package/Package'
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect( () => {
        fetch('packages.json')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, [])
    return (
        <div className='container mt-5'>
            <h3 className='text-primary text-center'>packages: {packages.length}</h3>
            <div className='row'>
            {
            packages.map (pack => <Package
            key={pack.id}
            pack={pack}
            ></Package>)
            }
            </div>
        </div>
    );
};

export default Packages;