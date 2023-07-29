import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Shared/Loading';

const Order = () => {
    const [user, loading] = useAuthState(auth);
    const [visibility, setVisibility] = useState(false);
    const [course, setCourse] = useState('');

    const imageStorageKey = 'a80e92850d333103388e807b03f46a26';

    const handleAddOrder = async (event) => {
        event.preventDefault();

        const customerName = event.target.customerName.value;
        const customerEmail = event.target.customerEmail.value;
        const courseName = event.target.courseName.value;
        const courseDetail = event.target.courseDetail.value;
        const coursePrice = event.target.coursePrice.value;
        const courseIcon = event.target.courseIcon.files[0];

        const formData = new FormData();
        formData.append('image', courseIcon);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
        const request = await fetch(url, {
            method: "POST",
            body: formData
        });
        const response = await request.json();
        console.log(response);

        if (response?.success) {
            const { data } = await axios.post('https://creative-agency-server-rakib.onrender.com/order', {
                name: customerName,
                email: customerEmail,
                course: courseName,
                detail: courseDetail,
                price: coursePrice,
                icon: response?.data?.url,
                state: 'pending'
            });

            if (data?.acknowledged) {
                event.target.reset();
            }
        }

    };

    const { data: courses, isLoading } = useQuery('courses', () => fetch('https://creative-agency-server-rakib.onrender.com/courses').then(res => res.json()));

    if (loading || isLoading) {
        return <Loading />
    }

    return (
        <section
            id='review-section'
            className='py-5 dashboard-section'
        >
            <div className='container'>
                <div>
                    <form autoComplete='off' onSubmit={handleAddOrder}>
                        <div>
                            <input
                                type="text"
                                name="customerName"
                                id="name"
                                value={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="customerEmail"
                                id="email"
                                value={user?.email}
                                readOnly
                            />
                        </div>
                        <div className='position-relative'>
                            <input
                                type="text"
                                name="courseName"
                                id="name"
                                placeholder='Graphic design...'
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                onFocus={() => setVisibility(true)}
                                required
                            />
                            {
                                visibility
                                &&
                                <div
                                    className='position-absolute top-100 left-0 w-100 bg-light rounded-2 shadow'
                                    style={{
                                        height: '200px',
                                        overflowY: 'scroll',
                                        padding: '1rem .5rem',
                                        boxSizing: 'border-box',
                                        borderRadius: '5px',
                                    }}
                                >
                                    {
                                        courses?.map(course => <p
                                            key={course?._id}
                                            className='bg-white px-5 py-3 shadow rounded-2'
                                            id='service_selector'
                                            onClick={() => {
                                                setCourse(course?.name);
                                                setVisibility(false);
                                            }}
                                        >
                                            {course?.name}
                                        </p>)
                                    }
                                </div>
                            }
                        </div>
                        <div>
                            <textarea
                                name="courseDetail"
                                className="description"
                                placeholder='Product detail...'
                                required
                            ></textarea>
                        </div>
                        <div className='d-flex flex-lg-row flex-column justify-content-lg-between'
                            id='group-input'
                        >
                            <div className='w-lg-50 w-100'>
                                <input
                                    type="number"
                                    name="coursePrice"
                                    id="price"
                                    placeholder='Price...'
                                    required
                                />
                            </div>
                            <div className='w-lg-50 w-100'>
                                <div className='position-relative'>
                                    <input
                                        type="file"
                                        name="courseIcon"
                                        id="icon"
                                        accept="image/png, image/jpeg, image/jpg"
                                        required
                                    />
                                    <p
                                        className='mb-0 position-absolute'
                                        style={{
                                            top: '25%',
                                            left: '33%',
                                            color: '#009444'
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30" fill="currentColor"
                                            className="bi bi-cloud-upload"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                                            />
                                        </svg>
                                        <span className='ms-2'>upload project file</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            id='matched-btn'
                            className='btn btn-success'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;