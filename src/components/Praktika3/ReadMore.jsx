import React, { useState } from 'react';

function ReadMore(props) {
    const { text, maxLength } = props;
    const [paragraph, setText] = useState(text);
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            {toggle ? paragraph : paragraph.substring(0, maxLength)}
            {toggle ? (
                <a
                    href='#'
                    className='text-dark'
                    onClick={() => setToggle(false)}
                >
                    ...read less
                </a>
            ) : (
                <a
                    href='#'
                    className='text-dark'
                    onClick={() => setToggle(true)}
                >
                    ...read more
                </a>
            )}
        </div>
    );
}

export default ReadMore;
