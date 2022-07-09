import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ menuItems, setMidTitle }) => {
    const [visible, setVisible] = useState(false);
    return (
        <section
            className='position-fixed'
            id='sidebar-btn'
            style={{zIndex: '9'}}
        >
            <div className='position-relative'>
                {
                    visible
                        ?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-layout-text-sidebar"
                            viewBox="0 0 16 16"
                            onClick={() => setVisible(!visible)}
                        >
                            <path
                                d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"
                            />
                            <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z"
                            />
                        </svg>
                        :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-layout-text-sidebar-reverse"
                            viewBox="0 0 16 16"
                            onClick={() => setVisible(!visible)}
                        >
                            <path
                                d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
                            />
                            <path
                                d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"
                            />
                        </svg>
                }
                {
                    visible
                    &&
                    <div
                        className='d-flex flex-column p-4 rounded shadow position-absolute start-100 top-0'
                        style={{
                            backgroundColor: '#f1f3f4',
                            width: '190px',
                        }}
                    >
                        <span
                            style={{
                                top: '5%',
                                left: '5%',
                                width: '0',
                                height: '0',
                                borderStyle: 'solid',
                                borderWidth: '10px 15px 10px 0',
                                borderColor: 'transparent #000000 transparent transparent',
                            }}
                            className='position-absolute'
                        />
                        {menuItems.map((menuItem, index) => <Link
                        key={index}
                            to={menuItem?.path}
                            onClick={() => {
                                setMidTitle(menuItem?.name);
                                setVisible(!visible);
                            }}
                            className='py-1'
                        >
                            <span className='me-2'>{menuItem?.icon}</span>
                            <span className='ms-2'>{menuItem?.name}</span>
                        </Link>)}
                    </div>
                }
            </div>
        </section >
    );
};

export default Sidebar;

/** core portion of this segment:
 * ==============================
 * nested routes
 * -------------
    {menuItems.map(menuItem => <Link
            to={menuItem?.path}
            onClick={() => setMidTitle(menuItem?.name)}
            className='py-2'
        >
        <span className='me-2'>{menuItem?.icon}</span>
        <span className='ms-2'>{menuItem?.name}</span>
    </Link>)}

 * svg icon of a bottom bar
 * ------------------------
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30" 
        height="30" 
        fill="currentColor" 
        className="bi bi-layout-text-sidebar-reverse" 
        viewBox="0 0 16 16"
    >
        <path 
            d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" 
        />
        <path 
            d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" 
        />
    </svg>
 */
