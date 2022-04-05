import React from 'react';
import useReviews from '../../hooks/useReviews';
import OnReviews from '../OnReviews/OnReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div >
            <div className='customer-container'>
                <h2>Every Feedback Matters</h2>
                <div className='reviews-container'>
                    {
                        reviews.map(review => <OnReviews
                            key={review.id}
                            review={review}
                        ></OnReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;