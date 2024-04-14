const express = require('express');
const jwt = require('jsonwebtoken');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
    // console.log(req.body);
    if(req.body.password === process.env.PASSWORD) {
        const token = jwt.sign({
            userId: 1,
        }, process.env.SECRET, {
            expiresIn: '1d',
        });
        res.json({
            token,
        });
    }else{
        res.status(401).send('Unauthorized');
    }
});

module.exports = loginRouter;