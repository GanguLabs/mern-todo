import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
        {todo.completed ? '✅' : '❌'}
        {todo.title}
    </div>
  )
}

export default TodoItem