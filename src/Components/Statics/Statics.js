import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statics = () => {
    const [axises, setAxis] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const axisLoaded = data.data.data;
                const axisData = axisLoaded.map(axis => {

                    const singleAxis = {
                        name: axis.name,
                        Total: axis.total
                    }
                    return singleAxis;

                })
                console.log(axisData);
                setAxis(axisData);
            });

    }, [])
    return (
        <BarChart width={500} height={400} data={axises}>
            <Bar dataKey="Total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default Statics;