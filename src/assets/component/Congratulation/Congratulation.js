import React from 'react';
import { Link } from 'react-router-dom';
import congrats from '../../images/congrats.gif'
import logo from '../../images/logo.png'
import './Congratulation.css'

const Congratulation = () => {
    return (
        <div className='row'>

            <div className="col-md-12 text-center ">

                <div className='congrats-parent'>

                    <div className="congrats">
                        <Link to='/'>Home <img src={logo} alt="" /></Link> <br />
                        <img className='img-fluid' src={congrats} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Congratulation;