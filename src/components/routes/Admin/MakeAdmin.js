import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [visibility, setVisibility] = useState(false);

    const handleMakeAdmin = async (event) => {
        event.preventDefault();

        const customerEmail = email;
        const { data } = await axios.put(`http://localhost:5000/email/${customerEmail}`, { role: 'admin' });

        if (data?.modifiedCount !== 0) {
            setEmail('');
        }
    };

    const { data: emails, isLoading, refetch } = useQuery('emails', () => fetch('http://localhost:5000/emails').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const getEmail = emails.filter(mail => mail.email.toLowerCase().includes(email.toLocaleLowerCase()));

    return (
        <section
            id='order-section'
            className='py-5 dashboard-section'
        >
            <div className='container'>
                <div>
                    <form autoComplete='off' onClick={handleMakeAdmin}>
                        <div className='d-flex flex-lg-row flex-column justify-content-between'>
                            <div className='w-75 position-relative' id='make-admin-input'>
                                <input
                                    type="email"
                                    name="userEmail"
                                    id="email"
                                    placeholder='Existing email address...'
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    onFocus={() => setVisibility(true)}
                                    required
                                />
                                {
                                    visibility
                                    &&
                                    <div
                                        className='position-absolute top-100 start-0  w-100  bg-light rounded-2 shadow'
                                        style={{
                                            height: '300px',
                                            overflowY: 'scroll',
                                            padding: '1rem .5rem',
                                            boxSizing: 'border-box',
                                            borderRadius: '5px',
                                        }}  
                                    >
                                        {
                                            getEmail.map(email => <p
                                                key={email?._id}
                                                className='bg-white px-5 py-3 shadow rounded-2'
                                                id='mail-selector'
                                                onClick={() => {
                                                    setEmail(email?.email);
                                                    setVisibility(false);
                                                    refetch();
                                                }}
                                            >
                                                {email?.email}
                                            </p>)
                                        }
                                    </div>
                                }
                            </div>
                            <button
                                type="submit"
                                id='matched-btn'
                                className='btn btn-success align-self-lg-center'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default MakeAdmin;