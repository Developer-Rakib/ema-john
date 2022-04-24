import React from 'react';
import { removeFromLocalStore } from '../../utilities/Storage';
import useCart from '../../utilities/useCart';
import useProduct from '../../utilities/useProduct';
import Cart from '../cart/Cart';
import OrderOverview from '../orderOverview/OrderOverview';

const Order = () => {
    let [products, setProducts] = useProduct();
    let [cartItems, setCartItems] = useCart(products);

    const singleItemDelete = (item) => {
        let restCartItems = cartItems.filter(cartItem => cartItem._id !== item._id);
        setCartItems(restCartItems)
        removeFromLocalStore(item._id)
    }
    return (
        <div className='shop-container'>
            <div className="" style={{ width: '70%', padding: '50px 100px' }}>
                {
                    cartItems.map(cartItem => <OrderOverview
                        key={cartItem._id}
                        cartItem={cartItem}
                        singleItemDelete={singleItemDelete}
                    ></OrderOverview>)
                }
            </div>
            <div className="orderSummary-container">
                <Cart data={cartItems}></Cart>
            </div>
        </div>
    );
};

export default Order;