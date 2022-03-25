import React from 'react';
import './Product.css'

const Product = (props) => {
    const { image, name, price } = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
        </div>
    );
};

export default Product;