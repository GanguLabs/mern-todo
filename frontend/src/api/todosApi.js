import { API_URL, token } from './config';

const todosApiURL = API_URL + '/todos';

export const getAllTodos = async () => {
  const response = await fetch(todosApiURL, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  
  });
  return response.json();
}

export const createTodo = async (todo) => {
  const response = await fetch(todosApiURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(todo),
  });
  return response.json();
}

export const updateTodo = async (todo) => {
  const response = await fetch(`${todosApiURL}/${todo._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(todo),
    })
    return response.json();
}

export const deleteTodo = async (id) => {
  const response = await fetch(`${todosApiURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    });
    // return response.json();
}