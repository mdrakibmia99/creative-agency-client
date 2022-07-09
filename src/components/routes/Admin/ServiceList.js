import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import axios from 'axios';

const ServiceList = () => {
    const [collapse, setCollapse] = useState(false);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()));

    const handleState = async (state, id) => {
        const { data } = await axios.put(`http://localhost:5000/order/${id}`, { state: state });
        console.log(data);
        refetch();
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='dashboard-section py-5'>
            <div className='container'>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead className='bg-white shadow rounded-pill'>
                            <tr className=''>
                                <th scope="col">#</th>
                                <th scope="col" className='ps-5'>Name</th>
                                <th scope="col" className='ps-5'>Email ID</th>
                                <th scope="col" className='ps-5'>Service</th>
                                <th
                                    scope="col"
                                    style={{ whiteSpace: 'nowrap' }}
                                    className='ps-5'
                                >Project Details</th>
                                <th scope="col" className='ps-5'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) =>
                                    <tr
                                        key={order._id}
                                    >
                                        <th scope="row">{index + 1}</th>
                                        <td
                                            style={{ whiteSpace: 'nowrap' }}
                                            className='ps-5'
                                        >{order?.name}</td>
                                        <td
                                            style={{ whiteSpace: 'nowrap' }}
                                            className='ps-5'
                                        >{order?.email}</td>
                                        <td
                                            style={{ whiteSpace: 'nowrap' }}
                                            className='ps-5'
                                        >{order?.course}</td>
                                        <td className='ps-5'>
                                            {
                                                collapse
                                                    ?
                                                    <>
                                                        <span
                                                            className='me-2 bg-warning rounded px-1 shadow'
                                                            role='button'
                                                            onClick={() => setCollapse(!collapse)}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                                                            </svg>
                                                        </span>
                                                        <span className='ms-2'>
                                                            {order?.detail}
                                                        </span>
                                                    </>
                                                    : <>
                                                        <span
                                                            className='me-2 bg-warning rounded px-1 shadow'
                                                            role='button'
                                                            onClick={() => setCollapse(!collapse)}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
                                                            </svg>
                                                        </span>
                                                        <span className='ms-2'>
                                                            {order?.detail?.slice(0, 22)}
                                                        </span>
                                                    </>
                                            }
                                        </td>
                                        <td className='ps-5'>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button
                                                    type="button"
                                                    className={`btn ${order?.state === 'ongoing' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                                    onClick={() => {
                                                        handleState('ongoing', order?._id);
                                                    }}
                                                    disabled={order?.state === 'ongoing'}
                                                >Ongoing</button>
                                                <button
                                                    type="button"
                                                    className={`btn ${order?.state === 'done' ? 'btn-success' : 'btn-outline-success'}`}
                                                    onClick={() => handleState('done', order?._id)}
                                                    disabled={order?.state === 'done'}
                                                >Done</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;