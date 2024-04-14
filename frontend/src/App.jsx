import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodos from './components/ListTodos'
import CreateTodoForm from './components/CreateTodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>MERN Todo App with React-Query</h1>
      <CreateTodoForm />
      <ListTodos />
    </div>
  )
}

export default App
