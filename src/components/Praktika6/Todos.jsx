import React from 'react'

function Todos(props) {
  let { todos } = props;
    return <div>
        {todos.map((todo) => <li>{todo.title}</li>)}
    </div>
}

export default Todos