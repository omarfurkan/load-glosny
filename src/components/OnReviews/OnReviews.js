import React from 'react';

const OnReviews = (props) => {
    const { name, comment, rating } = props.review
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <p><small>{rating}</small></p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default OnReviews;