import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  const [status, setStatus] = useState('all');

  return {
    todos,
    status,
    addTodo: todo => {
      setTodos([...todos, todo]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
    onToggle: todo => {
      const newTodos = todos.map(item => (item === todo ? {
          ...todo,
        status: todo.status === 'active' ? 'done' : 'active'
      } : item))
      setTodos(newTodos);
    },
    applyFilter: (filter) => {
      setStatus(filter)
    },
  };
};


