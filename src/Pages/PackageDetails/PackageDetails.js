import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
    const {packageId} = useParams();
    return (
        <div>
            <h2>Happy Tour : {packageId}</h2>
        </div>
    );
};

export default PackageDetails;