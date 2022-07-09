import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Review = () => {
    const [user, loading] = useAuthState(auth);

    const handleAddReview = async (event) => {
        event.preventDefault();

        const reviewerName = event.target.reviewerName.value;
        const reviewerEmail = event.target.reviewerEmail.value;
        const reviewerMessage = event.target.reviewerMessage.value;
        const review = {
            name: reviewerName,
            email: reviewerEmail,
            message: reviewerMessage
        };

        const { data } = await axios.put(`http://localhost:5000/review/${reviewerEmail}`, review);

        if(data?.acknowledged){
            event.target.reset();
        }
    };

    if (loading) {
        return <Loading />
    }

    return (
        <section
            id='order-section'
            className='py-5 dashboard-section'
        >
            <div className='container'>
                <div>
                    <form onSubmit={handleAddReview}>
                        <div>
                            <input
                                type="text"
                                name="reviewerName"
                                id="name"
                                value={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="reviewerEmail"
                                id="email"
                                value={user?.email}
                                readOnly
                            />
                        </div>
                        <div>
                            <textarea
                                name="reviewerMessage"
                                className="description-box"
                                placeholder='Product detail...'
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            id='matched-btn'
                            className='btn btn-success'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;