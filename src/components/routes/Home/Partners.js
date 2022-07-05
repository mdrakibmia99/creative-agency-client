import React from 'react';
import airbnb from '../../../assets/logos/airbnb.png';
import google from '../../../assets/logos/google.png';
import netflix from '../../../assets/logos/netflix.png';
import slack from '../../../assets/logos/slack.png';
import uber from '../../../assets/logos/uber.png';

const Partners = () => {
    const partners = [slack, google, uber, netflix, airbnb];

    return (
        <section className='container my-5'>
            <div
                className='row gx-5 gy-lg-0 gy-md-0 gy-5 flex-lg-row flex-md-row flex-column align-items-center' id='partners-section'
            >
                {
                    partners.map((partner, index) => <div
                        key={index}
                        className='col text-center'
                    >
                        <img
                            src={partner}
                            alt={'partner' + index}
                        />
                    </div>)
                }
            </div>
        </section>
    );
};

export default Partners;
