import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {

    const { id, name, logo, total } = quiz;
    const navigate = useNavigate();
    const handleStartQuiz = () => {
        navigate(`/questions/${id}`)

    }
    return (
        <div className='quiz'>
            <img src={logo} />
            <h1>{name}</h1>
            <p>Total Question: {total}</p>
            <button onClick={handleStartQuiz} className='btn-start'>Start Quiz</button>



        </div>
    );
};

export default Quiz;