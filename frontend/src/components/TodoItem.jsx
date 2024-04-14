import React from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { deleteTodo, updateTodo } from '../api/todosApi';

const TodoItem = ({ todo }) => {
    const queryClient = useQueryClient();

    // const { mutate: toggleTodo } = useMutation(
    //     (updatedTodo) => updateTodo(updatedTodo),
    //     {
    //         onSuccess: () => {
    //             queryClient.invalidateQueries('list-todos');
    //         }
    //     }
    // );
    const todoMutation = useMutation({
        mutationKey: 'update-todo',
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries('list-todos');
        }
    });

    const deleteMutation = useMutation({
        mutationKey: 'delete-todo',
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries('list-todos');
        }
    });

    const toggleTodo = (updatedTodo) => {
        todoMutation.mutate(updatedTodo);
    };
    // const toggleTodo = async () => {
    //     updateTodo({
    //         ...todo,
    //         completed: !todo.completed,
    //     });
    // };


    const deleteClickHandler = () => {
        deleteMutation.mutate(todo._id);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo({
                ...todo,
                completed: !todo.completed
            })} />
            {/* {todo.completed ? '✅' : '❌'} */}
            {/* {todo.title} */}
            <input type="text" value={todo.title} onChange={(e)=> toggleTodo({
                ...todo,
                title: e.target.value
            })} />

            <button onClick={deleteClickHandler}>
                Delete
            </button>
        </div>
    )
}

export default TodoItem