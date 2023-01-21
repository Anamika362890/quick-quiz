import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {

    const quizze = useLoaderData();
    const quizzes = quizze.data;

    return (
        <div>
            <Header></Header>
            <h2 className='color'>Select a Quiz Topic From Here :</h2>
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

export default Home;