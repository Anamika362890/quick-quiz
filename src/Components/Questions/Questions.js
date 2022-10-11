import React, { useState } from 'react';
import Option from '../Options/Option';

const Questions = ({ qstn, correctAnswer }) => {

    const { question } = qstn;
    console.log(qstn.options);
    const options = qstn.options;



    return (
        <div>


            <h1>Quiz  : {question} </h1>
            <h1>{correctAnswer}</h1>
            {
                options.map(option => <Option
                    option={option}
                ></Option>)
            }


        </div>
    );
};

export default Questions;