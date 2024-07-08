import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
