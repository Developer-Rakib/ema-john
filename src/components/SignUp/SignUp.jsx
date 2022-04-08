import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase.init';
import DirectSignIn from '../DirectSingIn/DirectSignIn';
import './SignUp.css'


const SignUp = () => {
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    let [name, setName] = useState('')
    let [error, setError] = useState('')
    let navigat = useNavigate();

    const handleLogIn = (e) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // Signed in 
                const user = result.user;

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    console.log(user);
                    console.log("updeted");
                    navigat('/Signin')
                }).catch((error) => {
                    // An error occurred
                    console.log(error.message);
                    setError(error.message)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            });

        e.preventDefault()
    }

    // handle Email
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    //  handle pass
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    //  handle Name
    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(error);
    return (
        <div className='SignIn-container'>
            <div className="SignIn">
                <div className="box">
                    <div className="form">
                        <h1>Sign Up Form</h1>

                        <form onClick={handleLogIn}>
                            <div>
                                <input onBlur={handleName} type="text" name="name" placeholder="Enter Your Name" id="" required />
                            </div>
                            <div>
                                <input onBlur={handleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />
                            </div>
                            <div>
                                <input onBlur={handlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                            </div>
                            <div>
                                <input type="submit" value="Sign up" />
                            </div>
                            <p>You already have an account ? <Link to={"/Signin"}>Login</Link></p>
                        </form>
                        <p style={{ color: 'red' }}>{error}</p>
                        <DirectSignIn></DirectSignIn>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;