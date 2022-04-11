import React from 'react';
import Post from './Post';
import Row from 'react-bootstrap/Row';

function Posts(props) {
    let { posts } = props;

    let list = posts.map((post) => {
        return <Post key={post.id} title={post.title} body={post.body} />;
    });

    console.log(posts);
    return <Row>{list}</Row>;
}

export default Posts;
