import React from 'react';
import './SignIn.css'
import { UserDetailsContext } from '../../App';
import { useState, useContext } from 'react';
import DirectSignIn from '../DirectSingIn/DirectSignIn';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';
import { useEffect } from 'react';

const SingIn = () => {
    let [email, setEmail] = useState('')
    let [emailError, setEmailError] = useState('')
    let [pass, setPass] = useState('')
    let [error, setError] = useState('')
    let navigat = useNavigate();
    let [userDetails, setUserDetails] = useContext(UserDetailsContext);


    const hadnleLogIn = (e) => {

        if (email.length == 0) {
            console.log("email input");
            return;
        } else if (pass.length == 0) {
            console.log("pass input");
            return;
        }


        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUserDetails(user)
                navigat('/shop')
                // console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
            })
            .catch((error) => {
                const errorMessage = error.code;
                setError(errorMessage)
            });
        e.preventDefault()
    }

    // hndle Email
    const hndleEmail = (e) => {
        setEmail(e.target.value)
    }
    // hndle pass
    const hndlePass = (e) => {
        setPass(e.target.value)
    }

    return (
        <div className='SignIn-container'>
            <div className="SignIn">
                <div className="box">
                    <div className="form">
                        <h1>Login Form</h1>

                        <form onSubmit={hadnleLogIn}>
                            <div>
                                <input onBlur={hndleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />

                            </div>
                            <div>
                                <input onBlur={hndlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                                <p style={{ color: 'red' }}>{ }</p>
                            </div>
                            <div>
                                <input type="submit" value="Login" />
                            </div>
                            <p>Forgot assword? <a href="">Click Here</a></p>
                            <p>Dont have an account ? <Link to={"/Signup"}>Sign Up</Link></p>
                        </form>
                        <p style={{ color: 'red' }}>{emailError}</p>
                        <DirectSignIn></DirectSignIn>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingIn;