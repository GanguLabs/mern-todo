import React from 'react'
import CreateTodoForm from '../components/CreateTodoForm'
import ListTodos from '../components/ListTodos'

const TodoPage = () => {
    return (
        <div>
            <h1>MERN Todo App with React-Query</h1>
            <CreateTodoForm />
            <ListTodos />
        </div>
    )
}

export default TodoPage