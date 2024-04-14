import { useQuery } from "@tanstack/react-query"
import Cliploader from 'react-spinners/ClipLoader'

import { getAllTodos } from "../api/todosApi"
import TodoItem from "./TodoItem"

const ListTodos = () => {
    const { data: todos, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['list-todos'],
        queryFn: getAllTodos
    })

    return (
        <div>
            <h1>List Todos</h1>
            {isLoading ? <Cliploader size={50} /> : null}
            {isError && <p>Error</p>}
            {isSuccess && todos &&
                <>
                    {todos?.map(todo => (
                        <TodoItem key={todo._id} todo={todo} />
                    ))}
                </>
            }
        </div>
    )
}

export default ListTodos