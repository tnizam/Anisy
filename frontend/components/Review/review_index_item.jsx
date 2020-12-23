import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import Rating from 'react-rating'
import '@fortawesome/fontawesome-free/js/all.js';

const ReviewIndexItem = ({review}) => {
    return (
        <div>

            <Rating
                value={review.rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly={true}
                />
            <div>
                {review.body}
            </div>
        </div>
    )
};

export default withRouter(ReviewIndexItem);