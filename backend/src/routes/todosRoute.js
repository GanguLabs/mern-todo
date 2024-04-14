const express = require('express');
const TodoModel = require('../models/TodoModel');

const todosRouter = express.Router();

todosRouter.get('/', async (req, res) => {
    const todos = await TodoModel.find();
    res.json(todos);
    // res.json([
    //     {
    //         id: 1,
    //         title: 'First todo',
    //         completed: false,
    //     },
    //     {
    //         id: 2,
    //         title: 'Second todo',
    //         completed: true,
    //     },
    // ]);
});

todosRouter.post('/', async (req, res) => {
    const todo = new TodoModel(req.body);
    await todo.save();
    res.json(todo);
    // res.json({
    //     id: 3,
    //     title: 'Third todo',
    //     completed: false,
    // });
})

module.exports = todosRouter;