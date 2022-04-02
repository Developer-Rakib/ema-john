import React from 'react';
import './Cart.css';

const Cart = ({ data }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const cart of data) {
        quantity = quantity + cart.quantity;
        totalPrice = totalPrice + cart.price * quantity;
        totalShipping = totalShipping + cart.shipping;
    };
    let tax = (totalPrice * 0.05).toFixed(2);
    let grandTotal = totalPrice + totalShipping + parseFloat(tax);


    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;