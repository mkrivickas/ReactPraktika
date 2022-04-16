import React from 'react';
import Header from './Header';
import Box from './Box';
import PostContent from './PostContent';
import Data from './data/Data.json';

function Praktika0() {
    return (
        <div>
            <h1>Užduotis 1</h1>
            <Header />
            <div className='article'>
                {Data.map((post) => (
                    <PostContent
                        key={post.key}
                        title={post.title}
                        img={post.img}
                        content={post.content}
                    />
                ))}
            </div>

            <div className='boxes'>
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    );
}

export default Praktika0;
