import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className='row load-parent'>
            <div className="load">
                <Spinner animation="border" variant="success" />
                <h2 className='mt-4 text-success'>Loading ...</h2>
            </div>
        </div>
    );
};

export default Loading;