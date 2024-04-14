import { Route, Routes } from 'react-router-dom'
import './App.css'
import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
