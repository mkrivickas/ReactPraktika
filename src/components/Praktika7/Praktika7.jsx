import React, { useState } from 'react';

function Praktika7() {
    let [todo, setTodo] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setTodo(json));
    return (
        <div>
            <h1>Užduotis 7 (paprastas variantas)</h1>
            {todo.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
            ))}
        </div>
    );
}

export default Praktika7;
