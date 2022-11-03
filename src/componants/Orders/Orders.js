import React, { useState } from 'react';
import './Orders.css';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div>
            <div className="shop-container">
                <div className="orders-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                    }{
                        cart.length === 0 && <h2>No Items for Review. please <Link to="/">Shop more</Link></h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        clearCart={clearCart}
                        cart={cart}>
                        <Link to='/shipping'> <button className='btn'>Proceed Shipping</button> </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;