import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ShowServices = () => {
    const [collapse, setCollapse] = useState(false);
    const { data: orders, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <div className='container'>
                <div id='service-card'>
                    {
                        orders?.map(service => <div
                            key={service._id}
                            className='p-5 dashboard-section shadow-sm'>
                            <div className='d-flex justify-content-between mb-3'>
                                <div>
                                    <img
                                        src={service.icon}
                                        alt="service1"
                                        style={{
                                            height: '74px',
                                            width: '74px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div>
                                    <span
                                        className={`${(service?.state === 'pending' && 'badge rounded-pill text-bg-danger') || (service?.state === 'ongoing' && 'badge rounded-pill text-bg-warning') || (service?.state === 'done' && 'badge rounded-pill text-bg-success')}`}
                                        style={{ fontWeight: '500' }}
                                    >
                                        {service?.state}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>
                                    {service?.course}
                                </h4>
                                <p className='text-muted'>
                                    {
                                        collapse
                                        ?
                                        service?.detail
                                        :
                                        service?.detail.slice(0, 50)
                                    }
                                    <br />
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm mt-3"
                                        onClick={()=>setCollapse(!collapse)}
                                    >
                                        {
                                            collapse
                                            ?
                                            'Read less...'
                                            :
                                            'Read more...'
                                        }
                                    </button>
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShowServices;