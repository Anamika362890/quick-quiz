import React from 'react';
import './Header.css'
import picture from './quiz.png'

const Header = () => {
    return (
        <div className='header'>

            <div className='header-text'>
                <h1>Make a Quiz To Develop Your Knowledge</h1>
                <p>Attend the quiz & test yourself!!!!!!!</p>

            </div>
            <div>
                <img src={picture} />
            </div>
        </div>
    );
};

export default Header;