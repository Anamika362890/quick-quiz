import React, { useState } from 'react';
import Option from '../Options/Option';
import './Question.css'

const Questions = ({ qstn, correctAnswer }) => {

    const { question } = qstn;
    console.log(qstn.options);
    const options = qstn.options;



    return (
        <div>


            <h1>Quiz  : {question} </h1>
            <h1>{correctAnswer}</h1>
            <div className='option-container'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>


        </div>
    );
};

export default Questions;