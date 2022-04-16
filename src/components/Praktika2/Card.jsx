import React, { useState } from 'react';

function Card() {
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);
    return (
        <div>
            <h1>Užduotis 3</h1>
            <div className='col-6 justify-content-between m-2'>
                <img
                    className='col-12'
                    src='https://miro.medium.com/max/1400/1*hm7aE3BdUfUWUgBYK1GiZA.jpeg'
                    alt='reactlove'
                />
                <div>
                    <h2>
                        <strong>Post</strong>
                    </h2>
                    <p className='col-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti obcaecati nihil qui, adipisci odio sapiente
                        nobis tempore, natus sit iste sed fuga harum excepturi
                        alias totam delectus deserunt dignissimos iure.
                    </p>
                    <button
                        variant='contained'
                        className='btn btn-success m-2'
                        onClick={() => setCountLike(countLike + 1)}
                    >
                        Like ({countLike})
                    </button>
                    <button
                        variant='contained'
                        className='btn btn-danger m-2'
                        onClick={() => setCountDislike(countDislike + 1)}
                    >
                        Hate ({countDislike})
                    </button>
                    <button
                        variant='contained'
                        className='btn btn-primary m-2'
                        onClick={() => {
                            setCountDislike(0);
                            setCountLike(0);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
