import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const question = useLoaderData();
    console.log(question.data);
    return (
        <div>
            <h1>qstn</h1>

        </div>
    );
};

export default Topics;