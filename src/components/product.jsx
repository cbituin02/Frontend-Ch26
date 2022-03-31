import './product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {

    const [quantity, setQuantity] = useState();

    const onQuantityChange = (value) => {
        console.log("Quantity changed to:", value);
        setQuantity(value);
    };

    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    }

    return (<div className='product'>
            <img src={props.data.image}></img>
            <h2> {props.data.title} </h2>
            <h3 className='price'> ${props.data.price} </h3>
            <h4 className='stock'> ${props.data.stock} left </h4>
            <label className='total'> Total: {getTotal()} </label>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className="btn btn-outline-success btn-sm">Add</button>
            </div>);
}

export default Product;