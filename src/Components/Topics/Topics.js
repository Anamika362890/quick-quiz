import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const quizze = useLoaderData();
    const quizzes = quizze.data;

    return (


        <div>
            <h2 className='color'>Select A Topic From Here</h2>
            <div className='quiz-container'>

                {
                    quizzes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}


                    ></Quiz>)
                }

            </div>
        </div>
    );
};

export default Topics;