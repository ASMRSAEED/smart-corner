import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { id, name, image, } = props.SelectProduct;
    return (
        <div className='cart-product'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <h4>{name}</h4>
            <h4 onClick={() => props.deleteItem(id)} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} /></h4>
        </div>
    );
};

export default Cart;