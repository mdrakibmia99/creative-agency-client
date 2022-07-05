import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [spinner, setSpinner] = useState(true);

    const handleSentMessage = (event) => {
        setSpinner(false);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            emailjs.sendForm("service_dozo57k", "template_cn03kep", event.target, "zVtSQ7zi_vZn2K-mv")
                .then((result) => {
                    console.log(result.text);
                    event.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <section id='contact-section'>
            <div className='container'>
                <div className='row gx-lg-5'>
                    <div
                        className='col-lg-6 col-12'
                    >
                        <h3
                            style={{
                                fontWeight: '600',
                                fontSize: '34px',
                                lineHeight: '43px',
                                marginBottom: '32px'
                            }}
                        >
                            Let us handle your <br />
                            project, professionally.
                        </h3>
                        <p
                            className='text-muted'
                            style={{
                                fontWeight: '300',
                                lineHeight: '24.5px'
                            }}
                        >
                            With well written codes, we build amazing apps for all <br />
                            platforms, mobile and web apps in general.
                        </p>
                    </div>
                    <div
                        className='col-lg-6 col-12'
                    >
                        <form onSubmit={handleSentMessage}>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Your email address...'
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Your/Company name...'
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder='Your message...'
                                    required
                                ></textarea>
                            </div>
                            {
                                spinner
                                    ?
                                    <button
                                        type="submit"
                                        id='matched-btn'
                                        className='btn btn-dark'
                                    >
                                        Send
                                    </button>
                                    :
                                    <button
                                        className="btn btn-dark"
                                        type="button"
                                        id='matched-btn'
                                        disabled
                                    >
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Done...
                                    </button>
                            }
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;
