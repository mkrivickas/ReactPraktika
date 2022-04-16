import React from 'react';
import { useState } from 'react';
import './Praktika4.css';

function Praktika4() {
    const [task, setTask] = useState([
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9E05XX0Og2tLKj_zDlL_5uu7uyP6HZ8yq2g&usqp=CAU',
            h1: 'Aš mokausi HTML',
            h2: false,
            button: 'OK',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRP5Cy1GBtBLaDAZmP-QVvRnD1RSUyf_clQ&usqp=CAU',
            h1: 'Aš mokausi CSS',
            h2: false,
            button: 'OK',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPC74rfgmvEW0dClTeS772vJzBwX_9EVuTLg&usqp=CAU',
            h1: 'Aš mokausi JavaScript',
            h2: false,
            button: 'OK',
        },
    ]);

    function changeStatus(card) {
        let tempArray = { ...task };
        tempArray[card].h2 = true;
        setTask(tempArray);
    }
    return (
        <div>
            <h1>Užduotis 5</h1>
            <div className='col-12 d-flex'>
            <div className='col-4 d-flex flex-column text-center'>
                <img src={task[0].img} alt='html' />
                <h1>{task[0].h1}</h1>
                <h2>{task[0].h2 ? `Išmokau` : `Mokausi`}</h2>
                <button
                    onClick={(e) => {
                        changeStatus(0);
                    }}
                    type='button'
                    className='btn btn-light'
                >
                    OK
                </button>
            </div>
            <div className='col-4 d-flex flex-column text-center'>
                <img src={task[1].img} alt='html' />
                <h1>{task[0].h1}</h1>
                <h2>{task[1].h2 ? `Išmokau` : `Mokausi`}</h2>
                <button
                    onClick={(e) => {
                        changeStatus(1);
                    }}
                    type='button'
                    className='btn btn-light'
                >
                    OK
                </button>
            </div>
            <div className='col-4 d-flex flex-column text-center'>
                <img src={task[2].img} alt='html' />
                <h1>{task[0].h1}</h1>
                <h2>{task[2].h2 ? `Išmokau` : `Mokausi`}</h2>
                <button
                    onClick={(e) => {
                        changeStatus(2);
                    }}
                    type='button'
                    className='btn btn-light'
                >
                    OK
                </button>
            </div>
        </div>
        </div>
        
    );
}

export default Praktika4;
