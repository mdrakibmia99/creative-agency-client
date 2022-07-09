import axios from 'axios';
import React from 'react';

const AddService = () => {
    const imageStorageKey = 'a80e92850d333103388e807b03f46a26';

    const handleAddService = async (event) => {
        event.preventDefault();

        const serviceName = event.target.serviceName.value;
        const serviceDetail = event.target.serviceDetail.value;
        const serviceIcon = event.target.serviceIcon.files[0];
        
        const formData = new FormData();
        formData.append('image', serviceIcon);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
        const request = await fetch(url, {
            method: "POST",
            body: formData
        });
        const response = await request.json();
        console.log(response);

        if (response?.success) {
            const { data } = await axios.post('http://localhost:5000/service', {
                name: serviceName,
                description: serviceDetail,
                icon: response?.data?.url,
                state: 'pending'
            });
            if (data?.acknowledged) {
                event.target.reset();
            }
        }
    };

    return (
        <section
            id='review-section'
            className='py-5 dashboard-section'
        >
            <div className='container'>
                <div>
                    <form onSubmit={handleAddService}>
                        <div>
                            <input
                                type="text"
                                name="serviceName"
                                id="name"
                                placeholder='Service title...'
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="serviceDetail"
                                className="description-box"
                                placeholder='Product detail...'
                                required
                            ></textarea>
                        </div>
                        <div className='d-flex flex-lg-row flex-column justify-content-between'
                            id='group-input'
                        >
                            <div className='w-lg-50 w-100'>
                                <div className='position-relative'>
                                    <input
                                        type="file"
                                        name="serviceIcon"
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                            <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                                        </svg>
                                        <span className='ms-2'>upload project file</span>
                                    </p>
                                </div>
                            </div>
                            <div className='w-lg-50 w-100 text-end align-self-center'>
                                <button
                                    type="submit"
                                    id='matched-btn'
                                    className='btn btn-success'
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;