import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto m-5'>
            <h3><span className='text-primary'>1. Question: </span>Difference between authorization and authentication?</h3>
            <p className='mb-4'>Authentication is the process where a user verified. On the other hand authorization is a way of verification where a user's data, files or applications has access. </p>
        
            <h3><span className='text-primary'>2. Question: </span>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='mb-4'>Firebase is a safe platform from google which I use to make project to add funcionality on website to sign up, sign in or join through other social account like google, facebook, github and verify with them.
            Other options could be cards, retina scans, voice recognition, and fingerprints.
             </p>

             <h3><span className='text-primary'>3. Question: </span>What other services does firebase provide other than authentication</h3>
            <p>Some other services that firebase provide other than authentication:
           <span className='d-block'> 1. Cloud Storage, functions, firestore, messaging
           <span className='d-block'></span>2. Hosting</span>
           <span className='d-block'>3. Google Analytics</span>
           <span className='d-block'>4. Predictions</span>
           <span className='d-block'>5. Dynamic Links</span>
           <span className='d-block'>6. Remote Config
            </span>
            </p>
        </div>
    );
};

export default Blogs;