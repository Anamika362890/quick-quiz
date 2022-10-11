import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Statics.css'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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



        <div>
            <h1 className='h1'>Chart Of Quick Quiz</h1>
            <div className='chart'>
                <AreaChart
                    width={600}
                    height={400}
                    data={axises}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statics;