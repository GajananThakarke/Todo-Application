const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create a new todo
router.post('/', async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.status(201).json(todo);
});

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = await Todo.findByPk(id);
  if (todo) {
    todo.title = title !== undefined ? title : todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;
    await todo.save();
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

module.exports = router;
