import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import logo from '../../images/logo.png'
import people from '../../images/people.png'
import './Signup.css'
import Loading from '../Loading/Loading';
import './Signup.css'

const Signup = () => {

    let location = useLocation()
    let navigate = useNavigate();

    let [agree, setAgree] = useState(false);

    let [createUserWithEmailAndPassword,
        user,
        error,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }

    let from = location.state?.from?.pathname || "/login";

    useEffect(() => {
        if (user) {
            toast('Signup Successful')
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    let handleSignup = event => {
        event.preventDefault()

        let firstname = event.target.firstname.value;
        let lastname = event.target.lastname.value;
        let number = event.target.number.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        if (password.length < 8) {
            alert('Password should me more than 8 characters')
        } else {
            if (agree) {
                createUserWithEmailAndPassword(email, password)
                toast("Proceed to SignUp")
            }
        }
    }

    return (
        <div className='row mt-15'>
            <div className="col-lg-6 ">
                <div className="logo-area">
                    <Link to='/'> <img src={logo} alt="logo" /></Link>
                </div>
                <div className="people-area ">
                    <img className='img-fluid' src={people} alt="people" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="signup-area">
                    <h2 className='text-center'>SignUp Form</h2>
                    <form onSubmit={handleSignup} className='signup-form text-center'>

                        <div className="form-floating">
                            <input className='form-control' type="text" name='firstname' id='firstname' placeholder='demo' autoComplete="off" required />
                            <label htmlFor='lastname' >Write First Name </label>
                        </div>
                        <div className="form-floating">
                            <input className='form-control' placeholder='demo' type="text" name='lastname' id='lastname' autoComplete="off" required />
                            <label htmlFor='lastname' >Write Last Name </label>
                        </div>
                        <div className="form-floating">
                            <input className='form-control' placeholder='demo' type="number" name='number' id='number' autoComplete="off" required />
                            <label htmlFor='number' >+88 01xxxxxxxxx </label>
                        </div>
                        <div className="form-floating">
                            <input className='form-control' placeholder='demo' type="email" name='email' id='email' autoComplete="off" required />
                            <label htmlFor='lastname' >Write Email Address </label>
                        </div>
                        <div className="form-floating">
                            <input className='form-control mb-0' placeholder='demo' type="password" name='password' id='password' autoComplete="off" required />
                            <label htmlFor='lastname' >Write Password </label>
                        </div>

                        <label className='password-label'>your password must be 8 characters</label> <br />
                        <button onClick={() => setAgree(!agree)} className='next-btn'>Sign Up </button>
                        {errorMessage}
                        <p className='pb-55 linkup'>Already have an account? <Link className='login-signup-link ml-5' to='/login'>LOGIN HERE!</Link> </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;