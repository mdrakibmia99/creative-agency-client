import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';
import { HashLink } from 'react-router-hash-link';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import Loading from './Loading';

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [user, loading] = useAuthState(auth);
    const { data: userRole,isLoading } = useQuery('userRole', () => fetch(`https://creative-agency-server-rakib.onrender.com/user/${user?.email}`).then(res => res.json()));

    
    if ( loading || isLoading) {
        return <Loading />
    }
    console.log(userRole?.role);

    return (
        <section id='header-section' className='shadow'>
            <div className='container py-4'>
                <header className='d-flex flex-lg-row flex-md-row justify-content-between align-items-center'>
                    <div id='header-logo'>
                        <Link to={'/'}>
                            <img
                                src={logo}
                                alt="creative agency"
                            />
                        </Link>
                    </div>
                    <nav id='header-items' className='d-flex align-items-center'>
                        <HashLink to={'#landing-section'} className='header-item'>Home</HashLink>
                        <HashLink className='header-item' to='#service-section'>Services</HashLink>
                        <HashLink className='header-item' to='#slider-section'>Projects</HashLink>
                        <HashLink
                            className='header-item'
                            to='#contact-section'
                            style={{ whiteSpace: 'nowrap' }}
                        >Contact us</HashLink>
                        {/* available only for admin */}
                        {
                            userRole?.role === 'admin'
                            &&
                            <Link
                                to='/admin'
                                title='admin dashboard'
                                className='header-item'
                            >
                                Dashboard
                            </Link>
                        }
                        {/* available only for customer */}
                        {
                            (user && userRole?.role !== 'admin')
                            &&
                            <Link
                                to='/customer'
                                title='customer dashboard'
                                className='header-item'
                            >
                                Dashboard
                            </Link>
                        }
                        <button id='authenticate-btn' className={`btn  ${user ? 'btn-dark' : 'btn-dark'}`}>
                            {
                                user
                                    ?
                                    <span
                                        onClick={async () => {
                                            localStorage.removeItem('accessToken');
                                            window.location.reload();
                                            await signOut(auth);
                                        }}
                                    >Logout</span>
                                    :
                                    <Link
                                        to='/login'
                                    >
                                        Login
                                    </Link>
                            }
                        </button>
                    </nav>
                    <span
                        id='menubar'
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {
                            showMenu
                                ?
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30" fill="currentColor"
                                    className="bi bi-list"
                                    viewBox="0 0 16 16"
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                                :
                                <div style={{
                                    position: 'relative',
                                }}>
                                    <span
                                        style={{
                                            position: 'relative'
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="currentColor"
                                            className="bi bi-x-circle shadow"
                                            viewBox="0 0 16 16"
                                            style={{
                                                zIndex: '99',
                                                color: 'black',
                                                position: 'absolute',
                                                top: '.5rem',
                                                right: '.5rem',
                                                borderRadius: '50%',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '0%',
                                            right: '0',
                                            backgroundColor: 'white',
                                            boxSizing: 'border-box',
                                            zIndex: '1'
                                        }}
                                        className='p-4 rounded shadow'
                                    >
                                        <nav className='d-flex flex-column align-items-center'>
                                            <HashLink to={'#landing-section'} className='header-item'>Home</HashLink>
                                            <HashLink className='header-item mt-1' to='#service-section'>Services</HashLink>
                                            <HashLink className='header-item mt-1' to='#slider-section'>Projects</HashLink>
                                            <HashLink
                                                className='header-item mt-1'
                                                to='#contact-section'
                                                style={{ whiteSpace: 'nowrap' }}
                                            >Contact us</HashLink>
                                            {/* available only for admin */}
                                            {
                                                userRole?.role === 'admin'
                                                &&
                                                <Link
                                                    to='/admin'
                                                    title='admin dashboard'
                                                    className='header-item mt-2'
                                                >
                                                    Dashboard
                                                </Link>
                                            }
                                            {/* available only for customer */}
                                            {
                                                (user && userRole?.role !== 'admin')
                                                &&
                                                <Link
                                                    to='/customer'
                                                    title='customer dashboard'
                                                    className='header-item mt-1'
                                                >
                                                    Dashboard
                                                </Link>
                                            }
                                            <button id='authenticate-btn' className={`btn ${user ? 'btn-success' : 'btn-dark'} mt-2`}>
                                                {
                                                    user
                                                        ?
                                                        <span
                                                            onClick={async () => {
                                                                localStorage.removeItem('accessToken');
                                                                await signOut(auth);
                                                            }}
                                                        >Logout</span>
                                                        :
                                                        <Link
                                                            to='/login'
                                                        >
                                                            Login
                                                        </Link>
                                                }
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                        }
                    </span>
                </header>
            </div>
        </section>
    );
};

export default Header;
