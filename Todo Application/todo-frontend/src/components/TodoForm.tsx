import React, { useState } from 'react';
import axios from 'axios';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');

  const addTodo = async () => {
    await axios.post('http://localhost:3001/todos', { title });
    setTitle('');
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
