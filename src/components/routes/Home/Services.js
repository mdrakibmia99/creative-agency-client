import React, { useState } from 'react';
import service1 from '../../../assets/icons/service1.png';
import service2 from '../../../assets/icons/service2.png';
import service3 from '../../../assets/icons/service3.png';

const Services = () => {
    const [active, setActive] = useState(1);
    const services = [
        {
            icon: service1,
            title: "Web & Mobile design",
            desc: "We craft stunning and amazing web UI, using a well drafted UX to fit your product."
        },
        {
            icon: service2,
            title: "Graphic design",
            desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out."
        },
        {
            icon: service3,
            title: "Web development",
            desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
        }
    ]; // array of object memoize

    return (
        <section id='service-section' className='mb-5'>
            <div className='container'>
                <h2 className='section-title'>Provide awesome <span className='focus-words'>services</span></h2>
                <div className='row gx-lg-5 gy-md-4 g-2'>
                    {
                        services.map((service, index) => <div
                            key={index}
                            className='col-lg-4 col-md-6 col-12'
                        >
                            <div
                                className={`text-center p-5 rounded service-card ${active === index && 'active'}`}
                                onMouseEnter={() => setActive(index)}
                            >
                                <div className='mb-3'>
                                    <img
                                        src={service.icon}
                                        alt={'service' + index}
                                        style={{
                                            height: '74px',
                                            width: '74px'
                                        }}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <h4>
                                        {service.title}
                                    </h4>
                                </div>
                                <div>
                                    <p className='text-muted'>
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
