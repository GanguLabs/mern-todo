const todosApiURL = 'http://localhost:3000/todos';

export const getAllTodos = async () => {
  const response = await fetch(todosApiURL, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMzA5MzA4NSwiZXhwIjoxNzEzMDk2Njg1fQ.HOJK-qTYRmNQZTVkbS9CVnjsqZzzctHK_fOCMLHYV1I`,
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