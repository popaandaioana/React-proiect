import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();  // { products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to="/" className='underline text-themeOrange-10 font-bold'>Shop more</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping' className='bg-themeOrange-10 p-3 text-themeWhite rounded-xl text-base ml-2 mt-3'>Proceed Shipping</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;