import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <div className='nav'>

            <div className='nav-left'>
                <div className='nav-icon'>
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                </div>
                <div>
                    <h2>Quick Quiz</h2>
                </div>


            </div>
            <div className='nav-right'>
                <nav className=''>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Topics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/statics'>Static</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/blog'>Blog</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;