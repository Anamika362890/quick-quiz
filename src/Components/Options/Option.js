import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    return (
        <div>
            <div >
                <div className='options'>

                    <div>
                        <input type="radio" />
                    </div>

                    <div>
                        <label className='option-level'>{option}</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Option;