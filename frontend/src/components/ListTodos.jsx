import { useState, useEffect } from "react"
import { getAllTodos } from "../api/todosApi"

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAllTodos().then(data => {
            console.log(data)
            setTodos(data)
        })
    }, [])
    return (
        <div>
            <h1>List Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {todo.completed ? '✅' : '❌'}
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListTodos