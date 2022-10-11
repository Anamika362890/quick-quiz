import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const question = useLoaderData();
    console.log(question.data);
    return (
        <div>

        </div>
    );
};

export default Topics;