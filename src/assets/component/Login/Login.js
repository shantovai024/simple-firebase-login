import React, { useEffect } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'
import people from '../../images/people.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Login = () => {

    let [signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let navigate = useNavigate();

    let from = location.state?.from?.pathname || "/congratulation";
    if (location.state?.from) {
        navigate(location.state.from)
    }

    useEffect(() => {
        if (user) {
            toast("Login Successfully");
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
        console.log(error);
    }


    let handleLogin = async (event) => {
        event.preventDefault()

        let email = event.target.email.value;
        let password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='row mt-15'>
            <div className="col-md-7 ">
                <div className="logo-area">
                    <Link to='/'> <img src={logo} alt="" /></Link>
                </div>
                <div className="people-area">
                    <img className='img-fluid' src={people} alt="" />
                </div>
            </div>
            <div className="col-md-5">
                <div className="signup-area">
                    <h2 className='text-center'>Log in Form</h2>
                    <form onSubmit={handleLogin} className='signup-form text-center'>
                        <div className="form-floating">
                            <input className='form-control' placeholder='demo' type="email" name='email' id='email' autoComplete="off" required />
                            <label htmlFor='lastname' >Write Email Address </label>
                        </div>
                        <div className="form-floating">
                            <input className='form-control mb-0' placeholder='demo' type="password" name='password' id='password' autoComplete="off" required />
                            <label htmlFor='lastname' >Write Password </label>
                        </div>
                        <label className='mb-65'>your password must be 8 character</label> <br />
                        <button className='next-btn'>Login</button> <br />
                        {errorMessage}
                    </form>
                    <div className="signup-bottom text-center">
                        <p className='text-center'>Forget Your Password? <Link className='ml-5 login-signup-link reset' to='/resetpassword'>RESET NOW!</Link> </p>
                        <p className='pb-55'>Don’t have an account? <Link className='ml-5 login-signup-link' to='/signup'>SIGNUP HERE!</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;