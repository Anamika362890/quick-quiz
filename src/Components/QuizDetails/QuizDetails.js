import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './QstnDetails.css'

const QuizDetails = () => {
    const question = useLoaderData();
    const questionInfo = question.data;
    const questionsAll = question.data.questions;
    const questionOption = question.data.options;
    console.log(question.data.questions);
    const { total, name } = questionInfo;

    return (
        <div>
            <h1 className='Question-name'>Quiz of {name}</h1>
            {
                questionsAll.map(qstn => <Questions
                    key={qstn.id}
                    qstn={qstn}

                ></Questions>)
            }

        </div>
    );
};

export default QuizDetails;