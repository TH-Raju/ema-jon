import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total = total + product.price * product.quantity;
        shipping += product.shipping;
    }

    const tax = (total * 0.1).toFixed(2); //10 / 100 = 0.1
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h1>Selected items: {quantity}</h1>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;