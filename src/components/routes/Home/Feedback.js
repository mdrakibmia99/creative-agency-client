import React from 'react';
import customer1 from '../../../assets/customer-1.png';
import customer2 from '../../../assets/customer-2.png';
import customer3 from '../../../assets/customer-3.png';

const Feedback = () => {
    const feedbacks = [
        {
            avatar: customer1,
            name: 'Nash Patrik',
            designation: 'CEO, Manpol',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            avatar: customer2,
            name: 'Miriam Barron',
            designation: 'CEO, Manpol',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            avatar: customer3,
            name: 'Bria Malone',
            designation: 'CEO, Manpol',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        }
    ];

    return (
        <section id='feedback-section' className='mb-5'>
            <div className='container'>
                <h2 className='section-title'>
                    Clients <span className='focus-words'>Feedback</span>
                </h2>
                <div className='row g-lg-5 gy-md-4 gy-2'>
                    {
                        feedbacks.map((feedback, index) => <div
                            key={index}
                            className='col-lg-4 col-md-6 col-12'
                        >
                            <div className='border p-4 rounded feedback-card'>
                                <div
                                    className='d-flex align-items-center'
                                    style={{ gap: '18px' }}
                                >
                                    <div>
                                        <img
                                            src={feedback.avatar}
                                            alt={"user" + index}
                                            style={{
                                                height: '64px',
                                                width: '64px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h5
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '30px',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {feedback.name}
                                        </h5>
                                        <p
                                            style={{
                                                fontSize: '16px',
                                                lineHeight: '28px',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {feedback.designation}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className='text-muted'
                                        style={{
                                            fontSize: '16px',
                                            lineHeight: '28px',
                                            fontWeight: '400'
                                        }}
                                    >
                                        {feedback.feedback}
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

export default Feedback;
