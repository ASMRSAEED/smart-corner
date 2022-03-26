import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Products = (props) => {

    const { id, price, name, image, } = props.Products;

    return (
        <div className="product-card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className='card-details'>
                <h4>{name}</h4>
                <h3>US ${price}</h3>
            </div>
            <button onClick={() => props.AddProduct({ id, price, name, image })} className='card-btn' >ADD TO CART <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>

    );
};

export default Products;