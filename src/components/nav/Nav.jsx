import React from 'react';
import logo from '../../images/Logo.svg'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="" />
            <div>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/orderInventory">Order Inventory</a>
            </div>
        </div>
    );
};

export default Nav;