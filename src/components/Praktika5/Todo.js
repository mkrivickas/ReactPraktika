import React from 'react'

function Todo(props) {
  return (
    <div>
        <div>{props.task}</div>
        <button className="btn btn-light">Check</button>
        <button className="btn btn-danger">Delete</button>
    </div>
  )
}

export default Todo;