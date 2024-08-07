import { useEffect, useState } from 'react';
import './App.css';
import { AddTodo } from './screens/AddTodo';
import { TodoList } from './screens/TodoList';
import axios from "axios"


function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    descr: "",
    date: "",
    time: ""
  })

  // console.log(todo);

  const getTodo = async () => {
    const data = await axios.get('/api/todo/')
    setTodos(data.data)
  }

  useEffect(() => {
    getTodo();
  }, [])

  return (
    <>
      <div className='container row'>
        <h1 className='text-center pt-3 todo'>Todo Application</h1>
        <div className='todo-cont'>
          <AddTodo todo={todo} setTodo={setTodo} getTodo={getTodo} />
          <TodoList todos={todos} getTodo={getTodo} />
        </div >
      </div>
    </>
  )
}

export default App
