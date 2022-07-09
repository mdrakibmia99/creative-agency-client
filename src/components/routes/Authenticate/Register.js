import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../assets/logos/logo.png';
import google from '../../../assets/icons/google.png';
import useAuthenticate from './useAuthenticate';

const Register = () => {
    const [
        signInWithGoogle,
        user,
        loading
    ] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [token] = useAuthenticate(user);
    if (token) navigate('/');

    return (
        <section className='min-vh-100 min-vw-100 d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column align-items-center'>
                <div>
                    <Link to='/home'>
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                height: '47px',
                                width: '150px',
                                objectFit: 'cover',
                                marginBottom: '43px'
                            }}
                        />
                    </Link>
                </div>
                <div className='border border-2 rounded p-5 mx-lg-0 mx-md-0 mx-2'>
                    <h3
                        style={{
                            fontWeight: '700',
                            fontSize: '24px',
                            lineHeight: '29.26px',
                            marginBottom: '32px'
                        }}
                        className='text-center'
                    >Sign up with</h3>
                    <button
                        className='btn btn-light rounded-pill w-100 d-flex justify-content-between align-items-center border'
                        style={{
                            marginBottom: '15px',
                        }}
                        onClick={() => signInWithGoogle()}
                    >
                        <img
                            src={google}
                            alt="google"
                            style={{
                                height: '31px',
                                width: '31px',
                                objectFit: 'cover'
                            }}
                            className='me-2'
                        />
                        {
                            loading
                                ?
                                <span className='spinner-grow spinner-grow-sm' />
                                :
                                <span>sign in with google</span>
                        }
                        <span></span>
                    </button>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '21.86px'
                    }}>
                        Don't have an account? <Link to={'/register'} className='text-primary text-decoration-underline'>Create an account</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Register;