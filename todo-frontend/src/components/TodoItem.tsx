import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  updateTodo: (id: number, data: { title?: string; completed?: boolean }) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
      />
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
