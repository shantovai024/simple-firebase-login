import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'
import people from '../../images/people.png'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import './ResetPassword.css'

const ResetPassword = () => {
    let navigate = useNavigate()
    const emailRef = useRef("");

    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    let errorMessage;

    if (sending) {
        return <Loading></Loading>;
    }

    if (error) {
        errorMessage = (
            <p className="text-danger text-center">{error?.message}</p>
        );
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent! Please check your inbox");
            navigate('/login')
        }
    };

    return (
        <div className='row mt-15'>
            <div className="col-md-7 ">
                <div className="logo-area">
                    <Link to='/'> <img src={logo} alt="logo" /></Link>
                </div>
                <div className="people-area">
                    <img className='img-fluid' src={people} alt="people" />
                </div>
            </div>
            <div className="col-md-5">
                <div className="signup-area">
                    <h2 className='text-center'>Reset your Password Now!</h2>
                    <form className='signup-form text-center'>
                        <div className="form-floating">
                            <input className='form-control' placeholder='demo' type="email" name='email' id='email' autoComplete="off" ref={emailRef} required />
                            <label htmlFor='lastname' >Write Email Address </label>
                        </div>

                        <button onClick={handleResetPassword} className='next-btn'>Reset</button> <br />
                        {errorMessage}
                    </form>
                    <div className="signup-bottom text-center">
                        <p className='pb-55'>Don’t have an account? <Link className='ml-5 login-signup-link' to='/signup'>SIGNUP HERE!</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;