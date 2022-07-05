import React from 'react';
import Header from '../Shared/Header';
import Contact from './Contact';
import Banner from './Banner';
import Partners from './Partners';
import Services from './Services';
import Feedback from './Feedback';
import Slider from './Slider';

const Landing = () => {
    return (
        <section>
            <Header />
            <Banner />
            <Partners />
            <Services />
            <Slider />
            <Feedback />
            <Contact />
        </section>
    ); // component approach memoizing
};

export default Landing;
