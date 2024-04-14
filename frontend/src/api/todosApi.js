const todosApiURL = 'http://localhost:3000/todos';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMzA5NjgzNSwiZXhwIjoxNzEzMTAwNDM1fQ.HoK3DUPM5VrEbahiX7aT47LDzi8n305Affw7Ek9sD-o";

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