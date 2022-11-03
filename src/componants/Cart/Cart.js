import './Cart.css';

const Cart = (props) => {
    const { cart, children } = props;
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
            <h1 className='select'>{quantity} Item Selected</h1>
            <p className='desc'>Total Price: ${total}</p>
            <p className='desc'>Total Shipping: ${shipping}</p>
            <p className='desc'>Tax: {tax}</p>
            <p className='desc'>Grand Total: {grandTotal.toFixed(2)} </p>
            {/* <button onClick={props.clearCart}>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;