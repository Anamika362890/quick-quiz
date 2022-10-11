import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import Option from '../Options/Option';
import './Question.css'

const Questions = ({ qstn }) => {

    const { question, correctAnswer } = qstn;
    console.log(qstn);
    const options = qstn.options;



    return (
        <div>


            <h2 className='question'>Quiz  : {question} </h2>

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