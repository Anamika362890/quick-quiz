import React from 'react';
import { NavLink } from 'react-router-dom';
import './Route404.css'

const Route404 = () => {
    return (
        <div className='route'>
            <h1 >404</h1>
            <p>Sorry!!!!!!We can't find what you are looking for.</p>
            <button className='btn-route'>
                <NavLink to="/home">Back To Home</NavLink>
            </button>

        </div>
    );
};

export default Route404;