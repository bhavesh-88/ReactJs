import React from 'react'

const Todos = ({ todos, addTodo }) => {
  return (
    <div>
       <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default Todos
