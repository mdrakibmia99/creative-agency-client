import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from '../../../assets/carousel-1.png';
import carousel2 from '../../../assets/carousel-2.png';
import carousel3 from '../../../assets/carousel-3.png';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const carousels = [carousel1, carousel2, carousel3, carousel1, carousel2, carousel3];

    return (
        <section id='slider-section' className='mb-5'>
            <div className='py-5'>
                <h2 className='section-title text-white'>Here are some of <span className='focus-words'>our works</span></h2>
                <div>
                    <Carousel
                        swipeable={true}
                        responsive={responsive}
                    >
                        {
                            carousels.map((carousel, index) => <div
                                key={index}
                                style={{
                                    margin: '0 1rem'
                                }}
                            >
                                <img
                                    src={carousel}
                                    alt={'carousel' + index}
                                    style={{
                                        height: '336px',
                                        width: '464px',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                    }}
                                />
                            </div>)
                        }
                    </Carousel>;
                </div>
            </div>
        </section>
    );
};

export default Slider;