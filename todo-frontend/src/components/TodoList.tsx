import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3001/todos');
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  const updateTodo = async (id: number, data: { title?: string; completed?: boolean }) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, data);
    setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
