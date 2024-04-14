import React, { useCallback, useEffect, useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { debounce } from 'lodash';

import { deleteTodo, updateTodo } from '../api/todosApi';

const TodoItem = ({ todo }) => {
    const [title, setTitle] = useState(todo.title);

    const queryClient = useQueryClient();

    // const { mutate: toggleTodo } = useMutation(
    //     (updatedTodo) => updateTodo(updatedTodo),
    //     {
    //         onSuccess: () => {
    //             queryClient.invalidateQueries('list-todos');
    //         }
    //     }
    // );

    useEffect(() => {
        if(title !== todo.title) {
            debouncedUpdateTitle({
                ...todo,
                title
            });
        }
    }, [title]);

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

    const updateTodoMutation = (updatedTodo) => {
        todoMutation.mutate(updatedTodo);
    };

    const debouncedUpdateTitle = useCallback(
        debounce(updateTodoMutation, 600),
        [updateTodoMutation]
    ); 
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
            <input type="checkbox" checked={todo.completed} onChange={() => updateTodoMutation({
                ...todo,
                completed: !todo.completed
            })} />
            {/* {todo.completed ? '✅' : '❌'} */}
            {/* {todo.title} */}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <button onClick={deleteClickHandler}>
                Delete
            </button>
        </div>
    )
}

export default TodoItem