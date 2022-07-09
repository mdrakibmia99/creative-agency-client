import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import auth from '../../firebase.init';
import Loading from './Loading';

const Panel = ({ title }) => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    return (
        <section
            className='py-2'
            style={{ backgroundColor: '#f1f3f4' }}
        >
            <div className='d-flex flex-lg-row flex-column justify-content-lg-between align-items-center mx-lg-5 mx-0 mt-lg-0 mt-3'>
                <div>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                height: '47px',
                                width: '150px',
                                objectFit: 'cover'
                            }}
                        />
                    </Link>
                </div>
                <div className='mt-lg-0 mt-2'>
                    <h6 className='border-bottom rounded text-dark text-gradient shadow-sm px-3 py-1 mb-0'>{title}</h6>
                </div>
                <div className='mt-lg-0 mt-2'>
                    <h6 className='border-bottom border-warning border-3 rounded-circle'>{user?.displayName}</h6>
                </div>
            </div>
        </section>
    );
};

export default Panel;