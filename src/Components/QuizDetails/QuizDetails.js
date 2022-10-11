import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const question = useLoaderData();
    const questionInfo = question.data;
    console.log(questionInfo);
    const { total, name } = questionInfo;
    return (
        <div>
            <h1>Quiz details : {total}</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default QuizDetails;