import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className='text-center pt-5 mt-5'>
            Copyright © All right reserved by <samp>Creative Agency</samp> {year}.
        </section>
    );
};

export default Footer;
