import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart, children } = props;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5 className='mb-3'>Grand Total: {grandTotal.toFixed(2)}</h5>
            {/* <button onClick={clearCart} className='bg-themeOrange-10 p-3 text-themeWhite rounded-xl text-base'>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;