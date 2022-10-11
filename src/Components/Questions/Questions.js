import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import Option from '../Options/Option';
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';



const Questions = ({ qstn }) => {

    const { question, correctAnswer } = qstn;
    console.log(qstn);
    const options = qstn.options;



    return (
        <div className='question-container'>


            <h2 className='question'>Quiz  : {question.slice(3, -4)} </h2>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>


            <div className='option-container'>
                {
                    options.map(option => <Option
                        key={option}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>


        </div >
    );
};

export default Questions;