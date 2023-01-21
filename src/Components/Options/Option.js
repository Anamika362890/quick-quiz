import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Option = ({ option, correctAnswer }) => {
    const handleClickButton = () => {
        if (option === correctAnswer) {
            toast('Correct Answer');


        }
        else {
            toast('Wrong Answer');
        }

    }
    return (
        <div>
            <div >
                <div className='options'>



                    <button onClick={handleClickButton} className='btn-option' >
                        <label className='option-level' >{option}</label>
                    </button>
                    <ToastContainer />


                </div>


            </div>

        </div>

    );
};

export default Option;