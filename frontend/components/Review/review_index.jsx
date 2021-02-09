import React from 'react';
import Rating from 'react-rating';

import ReactStars from "react-rating-stars-component";


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: this.props.authorId,
        }
        // console.log("prop", props)

        this.handleDeleteReview = this.handleDeleteReview.bind(this)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     this.props.fetchReviews(this.props.productId);
    // }

    

    componentDidMount() {
        this.props.fetchReviews(this.props.productId)
    }

    handleDeleteReview(e) {
        e.preventDefault();
        this.props.destroyReview(this.props.productId, this.props.reviewId).then(() => 
            window.location.reload());
    }

    render() {
        const {reviews} = this.props;

        return (
            <div>
            <div className='reviews-box'>
                <h2 className="review-title">Reviews</h2>
                <ul>
                    {
                        reviews.map(review => {
                        return (
                            <div className="each-review">
                                <div>
                                    <h4 className="review-name">
                                        {review.firstName}</h4>
                                </div>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly={true}
                                />
                                
                                <div>
                                    {review.body}
                                </div>
                                
                                <div>
                                    {this.props.authorId === review.authorId ? 
                                    <button onClick={this.handleDeleteReview}>Delete</button>
                                    : null
                                    }
                                </div>
                                
                                
                            </div>
                        
                        )})
                    }
                </ul>
            </div>
            </div>
        )
    }

}

export default ReviewIndex;