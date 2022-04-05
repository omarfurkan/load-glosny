import React from 'react';
import './OnReviews.css'

const OnReviews = (props) => {
    const { name, comment, rating, img } = props.review
    return (
        <div className='on-reviews-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p><small>Rating: {rating}</small></p>
            <p>Review: {comment}</p>
        </div>
    );
};

export default OnReviews;