import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import './DirectSignIn.css';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from '../../firebase.init'
import { useContext } from 'react';
import { UserDetailsContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const DirectSignIn = () => {
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    let navigat = useNavigate();


    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUserDetails(user);
                navigat("/shop")
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUserDetails(user);
                navigat("/shop")
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='direct-login'>
            <button onClick={handleGoogle}><FcGoogle></FcGoogle></button>
            <button style={{ color: 'rgb(29, 155, 240)' }}><BsTwitter></BsTwitter></button>
            <button onClick={handleFacebook} ><FaFacebookF style={{ color: '#1877F2' }}></FaFacebookF></button>
        </div>
    );
};

export default DirectSignIn;