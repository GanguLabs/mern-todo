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

todosRouter.put('/:id', async (req, res) => {
    const todo = await TodoModel.findById(req.params.id);

    if(!todo){
        return res.status(404).send('Todo not found');
    }
    todo.title = req.body.title;
    todo.completed = req.body.completed;

    await todo.save();
    res.json(todo);
    // const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.id, todo);
    // res.json(updatedTodo);

});

todosRouter.delete('/:id', async (req, res) => {
    const todo = await TodoModel.findById(req.params.id);

    if(!todo){
        return res.status(404).send('Todo not found');
    }

    await todo.deleteOne();
    res.status(204).json({
        status: 'success',
        message: 'Todo deleted successfully',
    });

});

module.exports = todosRouter;