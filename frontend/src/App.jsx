import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(json => setTodos(json.todos));
  }, []);

  return (
    <div>
      <CreateTodo onTodoAdded={(newTodo) => setTodos([...todos, newTodo])} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
