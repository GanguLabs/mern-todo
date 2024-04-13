const express = require('express');

const todosRouter = express.Router();

todosRouter.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            title: 'First todo',
            completed: false,
        },
        {
            id: 2,
            title: 'Second todo',
            completed: true,
        },
    ]);
});

module.exports = todosRouter;