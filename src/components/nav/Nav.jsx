import React from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../cusmtomLink/CustomLink';
import { UserDetailsContext } from '../../App';
import './Nav.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';


const Nav = () => {
    let [userDetails, setUserDetails] = useContext(UserDetailsContext);
    let location = useLocation();
    let rout = location.pathname;

    const hndleLogOut = () => {
        signOut(auth).then(() => {
            console.log("logOut succes");
        }).catch((error) => {
            console.log(error.messge);
        });
    }
    return (
        <>
            {
                rout.includes('Sign') || <div className='nav-container'>
                    <img src={logo} alt="" />
                    <div>
                        <CustomLink to={"/"}>Home</CustomLink>
                        <CustomLink to={"/shop"}>Shop</CustomLink>
                        <CustomLink to={"/order"}>Order</CustomLink>
                        {
                            Object.keys(userDetails).length == 0 ? <CustomLink onClick={hndleLogOut} to={"/Signin"}></CustomLink> : <CustomLink to={"/orderInventory"}>Order Inventory</CustomLink>
                        }

                    </div>
                    {
                        Object.keys(userDetails).length == 0 || <div className='user'>
                            <img src={userDetails.photoURL ? userDetails.photoURL : "https://www.placidsoftware.com/assets/images/user-img.png"} alt="" />
                            <p>{userDetails.displayName}</p>
                            <CustomLink onClick={hndleLogOut} to={"/Signin"}>Log Out</CustomLink>
                        </div>
                    }
                </div>
            }
        </>

    );
};

export default Nav;