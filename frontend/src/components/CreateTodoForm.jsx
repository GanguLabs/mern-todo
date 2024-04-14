import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { createTodo } from '../api/todosApi';

const CreateTodoForm = () => {
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationKey: 'update-todo',
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries('list-todos');
        }
    });

    const createTodoHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTodo = {
            title: formData.get('title'),
            completed: false,
        };
        todoMutation.mutate(newTodo);
    };
  return (
    <form onSubmit={createTodoHandler}>
        <input name='title' type='text' placeholder='Enter a new todo' />
        <button type='submit'>Create Todo</button>
    </form>
  )
}

export default CreateTodoForm