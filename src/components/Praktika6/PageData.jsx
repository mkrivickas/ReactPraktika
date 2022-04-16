import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Todos from './Todos';
import Users from './Users';
import Container from 'react-bootstrap/Container';

function PageData() {
    const [type, setType] = useState('');
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
            });
            fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((json) => {
                setComments(json);
            });
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((json) => {
                setUsers(json);
            });
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then((response) => response.json())
            .then((json) => {
                setAlbums(json);
            });
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((response) => response.json())
            .then((json) => {
                
                setPhotos(json);
            });
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setTodos(json);
            });
    }, [type]);
    return (
        <div>
        <h1>Užduotis 7 (su mygtukais)</h1>
            <button onClick={() => setType('posts')}>posts</button>
            <button onClick={() => setType('comments')}>comments</button>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('albums')}>albums</button>
            <button onClick={() => setType('photos')}>photos</button>
            <button onClick={() => setType('todos')}>todos</button>
            <Container>
                {type === 'posts' && <Posts posts={posts} />}
                {type === 'comments' && <Comments comments={comments} />}
                {type === 'users' && <Users users={users} />}
                {type === 'albums' && <Albums albums={albums} />}
                {type === 'photos' && <Photos photos={photos} />}
                {type === 'todos' && <Todos todos={todos} />}
            </Container>
        </div>
    );
}
export default PageData;
