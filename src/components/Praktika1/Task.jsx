import React from 'react';
import { useState } from 'react';

function Task() {
    const [color, setColor] = useState(false);

    // Veiks daug kartų
    // function changeColor() {
    //     setColor(!color);
    // }

    // Veiks vieną kartą
    function changeColor() {
        setColor(true);
    }

    return (
        <div className='col-3 border my-3 p-2 text-center'>
            <h3>{color ? 'Task is done!' : 'Task is not done.'}</h3>
            <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
            </p>
            <button
                onClick={changeColor}
                className={color ? 'btn btn-success' : 'btn btn-danger'}
            >
                {color ? 'Done' : 'Mark as done!'}
            </button>
        </div>
    );
}

export default Task;
