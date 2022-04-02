import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../cusmtomLink/CustomLink';
import './Nav.css'



const Nav = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="" />
            <div>
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink to={"/shop"}>Shop</CustomLink>
                <CustomLink to={"/order"}>Order</CustomLink>
                <CustomLink to={"/orderInventory"}>Order Inventory</CustomLink>
            </div>
        </div>
    );
};

export default Nav;