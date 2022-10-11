import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statics'>Static</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;