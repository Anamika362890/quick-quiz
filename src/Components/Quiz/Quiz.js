import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} />
            <h1>{name}</h1>
            <p>Total Question: {total}</p>
            <button className='btn-start'>Start Quiz</button>



        </div>
    );
};

export default Quiz;