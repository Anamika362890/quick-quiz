import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import Option from '../Options/Option';
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeLowVision } from '@fortawesome/free-solid-svg-icons';



const Questions = ({ qstn }) => {
    const [show, setShow] = useState(true);

    const { question, correctAnswer } = qstn;

    const options = qstn.options;




    return (
        <div className='question-container'>


            <h2 className='question'>Quiz  : {question.slice(3, -4)} </h2>




            <div className='option-container'>
                {
                    options.map(option => <Option
                        key={option}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>

            <div>
                <div className='right-answer'>
                    {
                        show ? <h4><FontAwesomeIcon onClick={() => setShow(!show)} className='icon-eye' icon={faEyeLowVision}></FontAwesomeIcon>
                            Click To See Show Correct Answer</h4> : <h4><FontAwesomeIcon onClick={() => setShow(!show)} className='icon-eye' icon={faEye}></FontAwesomeIcon>
                            Correct Answer  :  {correctAnswer}</h4>
                    }

                </div>






            </div>
        </div >
    );
};

export default Questions;