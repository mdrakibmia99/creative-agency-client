import React from 'react';
import frame from '../../../assets/logos/Frame.png';
import banner from '../../../assets/banner-bg.png';
import ReactTooltip from 'react-tooltip';

const Banner = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${banner})`,
            }}
            id='landing-section'
        >
            <div className='container'>
                <div id='banner-section'>
                    <div
                        className='row gx-lg-5 gy-5'
                    >
                        <div className='col-lg-5 col-12'>
                            <h2 id='banner-title'>
                                Let's Grow Your <br />
                                Brand To The <br />
                                Next Level
                            </h2>
                            <p className='text-muted' id='banner-desc'>
                                This is an inspiration series curated by Corebook° <br />
                                with a few brilliant examples by designers aspiring to protect their brand design integrity with a brand book.
                            </p>
                            <button
                                id='matched-btn'
                                className='btn btn-dark'
                                data-tip="You are a step ahead to be hired!"
                            >
                                Hire
                            </button>
                            <ReactTooltip
                                place='top'
                                eventOff='click'
                            />
                        </div>
                        <div
                            className='col-lg-7 col-12'
                            style={{
                                backgroundImage: `url(${frame})`
                            }}
                            id='banner-img'
                        >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
