import React, { useState } from 'react';
import Option from '../Options/Option';
import './Question.css'

const Questions = ({ qstn, }) => {

    const { question } = qstn;
    console.log(qstn.options);
    const options = qstn.options;



    return (
        <div>


            <h2 className='question'>Quiz  : {question} </h2>

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