import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    return (
        <div>
            <div >
                <div className='options'>

                    <input type="radio" />

                    <label >{option}</label>
                </div>

            </div>
        </div>
    );
};

export default Option;