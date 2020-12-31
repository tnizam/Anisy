import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexContainer from '../Review/review_index_container';
import ReviewCreateContainer from '../Review/review_create_container';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            productId: this.props.productId,
            quantity: 1,

        }
// console.log(this.state)
    this.handleSubmitToCart = this.handleSubmitToCart.bind(this);
};

    componentDidMount() {
        // debugger;
        this.props.eachProduct(this.props.match.params.productId);
        console.log("mountprops", this.props)
        console.log("state", this.state)

    };

    handleSubmitToCart(e) {
        e.preventDefault();
        
        this.props.createCartItem(this.state);
        // const cartItem = {
        //     product_id: this.state.entities.products.id,
        //     quantity: 1,

        // }
        // this.props.createCartItem(cartItem);
    }

    render () {
        // debugger;
        const {product} = this.props;
        
        if(!product) {
            return null;
        } 


        // debugger;
        return (
            <div>
                <div className="product-container">
                    <div>
                        <img src={product.photoUrl} className="pro-image"/>
                    </div>
                    <div className="product-info">
                        <h2 className='product-name-show'>{product.productName}</h2>
                        <h3 className='price-show'>${product.price}</h3>


                        <select className="dropdown-content">
                            <option value="#" selected='selected'>1</option>
                            <option value="#">2</option>
                            <option value="#">3</option>
                            <option value="#">4</option>
                            <option value="#">5</option>

                        </select>

                        
                        <button className='cart-button'
                                onClick={this.handleSubmitToCart}
                        >Add to cart</button>

                        <h3 className='des-tag'>Description:</h3>
                        <p className='description'>{product.description}</p>
                    </div>
                </div>

                    <div className='review-container'>
                        <ReviewIndexContainer
                            productId={product.id}
                        />
                        <ReviewCreateContainer
                            productId={product.id}
                        />
                    </div>
                <div className='blank'></div>

            </div>
        )
    }
}


export default ProductShow;