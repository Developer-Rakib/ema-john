import React from 'react';
import './SignIn.css'
import { UserDetailsContext } from '../../App';
import { useState, useContext } from 'react';
import DirectSignIn from '../DirectSingIn/DirectSignIn';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const SingIn = () => {
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    let [error, setError] = useState('')
    let navigat = useNavigate();
    let [userDetails, setUserDetails] = useContext(UserDetailsContext);


    const hadnleLogIn = (e) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUserDetails(user)
                navigat('/shop')
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
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

                        <form onClick={hadnleLogIn}>
                            <div>
                                <input onBlur={hndleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />
                            </div>
                            <div>
                                <input onBlur={hndlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                            </div>
                            <div>
                                <input type="submit" value="Login" />
                            </div>
                            <p>Forgot assword? <a href="">Click Here</a></p>
                            <p>Dont have an account ? <Link to={"/Signup"}>Sign Up</Link></p>
                        </form>
                        <p style={{ color: 'red' }}>{error}</p>
                        <DirectSignIn></DirectSignIn>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingIn;