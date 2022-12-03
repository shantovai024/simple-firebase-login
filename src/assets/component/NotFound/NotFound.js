import React from 'react';
import notfound from '../../images/not_found.png'

const NotFound = () => {
    return (
        <div className='row'>
            <div className="col-md-12 text-center img-fluid">
                <img src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;