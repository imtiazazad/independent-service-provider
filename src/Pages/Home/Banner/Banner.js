import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import travel1 from '../../../images/travel-1.jpg';
import travel2 from '../../../images/travel-2.jpg';
import travel3 from '../../../images/travel-3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel1} 
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='text-secondary bg-white'>Explore Beauty of This World</h3>
                    <p className='text-secondary bg-white'>Discover the world with local experts, one tailor-made trip </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel2} 
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-secondary bg-white'>Explore Beauty of This World</h3>
                    <p className='text-secondary bg-white'>Discover the world with local experts, one tailor-made trip</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel3} 
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className='text-secondary bg-white'>Explore Beauty of This World</h3>
                    <p className='text-secondary bg-white'>Discover the world with local experts, one tailor-made trip</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;