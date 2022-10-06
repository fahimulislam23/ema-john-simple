import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p>{name}</p>
            <p>Price: $ {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p>Ratings: {ratings} stars</p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;