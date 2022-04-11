import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Users from './Users';
import Comments from './Comments';
import Container from 'react-bootstrap/Container';

function PageData() {
    const [type, setType] = useState('');
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
            });
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((json) => {
                setUsers(json);
            });
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((json) => {
                setComments(json);
            });
    }, [type]);
    return (
        <div>
            <button onClick={() => setType('posts')}>posts</button>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('comments')}>comments</button>
            <Container>
                {type === 'posts' && <Posts posts={posts} />}
                {type === 'users' && <Users users={users} />}
                {type === 'comments' && <Comments comments={comments} />}
            </Container>
        </div>
    );
}
export default PageData;
