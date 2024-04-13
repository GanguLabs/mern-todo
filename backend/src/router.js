const express = require('express');

const isLoggedin = require('./middleware/isLoggedIn');

const loginRouter = require('./routes/loginRoute');
const todosRouter = require('./routes/todosRoute');

const router = express.Router();

router.use('/login', loginRouter); 
router.use('/todos', isLoggedin, todosRouter);

module.exports = router;