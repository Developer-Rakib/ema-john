import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase.init';
import DirectSignIn from '../DirectSingIn/DirectSignIn';
import Swal from 'sweetalert2'
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
                    Swal.fire(
                        'Good job!',
                        'Sign up Completed!',
                        'success'
                    )
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
        let emailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!emailPattern.test(e.target.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email Not valid!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return
        }
        setEmail(e.target.value)
    }
    //  handle pass
    const handlePass = (e) => {
        let password = e.target.value;
        if (password.length < 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should be at least 6 characters!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }
        setPass(e.target.value)

    }
    //  handle Name
    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div className='SignIn-container'>
            <div className="SignIn">
                <div className="box">
                    <div className="form">
                        <h1>Sign Up Form</h1>

                        <form onSubmit={handleLogIn}>
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
                        {/* <p style={{ color: 'red' }}>{error}</p> */}
                        <DirectSignIn></DirectSignIn>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;