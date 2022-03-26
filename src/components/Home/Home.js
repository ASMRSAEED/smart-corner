import React, { useEffect, useState } from 'react';
import './Home.css';
import allData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {

    }, [])
    const AddProduct = (data) => {
        if (cart.find(x => x.id === data.id)) {
            alert('Already Added In CART')
        } else if (cart.length < 4) {
            setCart([...cart, data])
        }
        else if (cart.length > 3) {
            alert('Cannot Add More Than 4 Products')
        }
    }
    const deleteItem = (id) => {
        const deleteItemFiltered = [...cart].filter(x => x.id !== id)
        setCart(deleteItemFiltered)
    }
    const cartStoreReset = () => {
        setCart([])
    }
    const choose1ForMe = () => {
        if (cart.length > 1) {
            setCart([cart[Math.floor(Math.random() * 4)]])
        } else {
            alert('Please Choose Minimum 2 Products')
        }
    }
    return (
        <div>
            <div className="header-text">
                <div className="section-header">
                    <h1>Smart Corner</h1>
                    <p>---Choose Best One---</p>
                </div>
            </div>
            <div className="content-section">
                <div className="products">
                    {
                        allData.map(data => <Products key={data.id} AddProduct={AddProduct} Products={data}></Products>)
                    }
                </div>
                <div className="cart-section">
                    <div className="cart-text">
                        <h2><u>Shopping Cart</u></h2>
                    </div>
                    {
                        cart.map(data2 => <Cart key={data2.id} deleteItem={deleteItem} SelectProduct={data2}></Cart>)
                    }
                    <div className="button">
                        <button onClick={choose1ForMe} className="button-one">CHOOSE 1 FOR ME</button>
                        <button onClick={cartStoreReset} className="button-two">CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;