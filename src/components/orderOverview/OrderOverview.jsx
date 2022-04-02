import React from 'react';
import './OrderOverview.css';
import { MdDelete } from 'react-icons/md'

const OrderOverview = ({ cartItem, singleItemDelete }) => {
    let { name, img, price, quantity, shipping } = cartItem;
    return (
        <div className='order-container'>
            <img src={img} alt="" />
            <div className='order-info' title={name}>
                <h3>{name.length > 20 ? name.slice(0, 17) + "..." : name}</h3>
                <h4>Price: <span >${price}</span></h4>
            </div>
            <div className='order-info'>
                <h4>Shipping Cost: <span>{shipping}</span></h4>
                <h4>Quantity: <span>{quantity}</span></h4>
            </div>
            <MdDelete onClick={() => singleItemDelete(cartItem)} className='delete-icon'></MdDelete>

        </div>
    );
};

export default OrderOverview;