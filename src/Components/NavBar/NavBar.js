import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCross, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';





const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='nav'>

            <div className='nav-left'>
                <div className='nav-icon'>
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                </div>
                <div>
                    <h1><span className='quick'>Quick </span> Quiz</h1>
                </div>


            </div>
            <div className='nav-right'>
                <div onClick={() => setNavbar(!navbar)}>
                    {
                        navbar ? <FontAwesomeIcon className='icon' icon={faXmark}></FontAwesomeIcon>
                            : <FontAwesomeIcon className='icon' icon={faBars}></FontAwesomeIcon>

                    }

                </div>
                <nav className={`nav-button ${navbar ? 'open' : 'close'}`}>
                    <NavLink to='/home' className={({ isActive }) =>
                        isActive ? 'one' : undefined}>Home</NavLink>
                    <NavLink to='/topics' className={({ isActive }) =>
                        isActive ? 'one' : undefined}>Topics</NavLink>
                    <NavLink to='/statics' className={({ isActive }) =>
                        isActive ? 'one' : undefined}>Static</NavLink>
                    <NavLink to='/blog' className={({ isActive }) =>
                        isActive ? 'one' : undefined}>Blog</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;