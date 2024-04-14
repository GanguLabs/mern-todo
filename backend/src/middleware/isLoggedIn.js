const jwt = require('jsonwebtoken');

const isLoggedin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send('Login Failed');
    } else {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(403).send('Invalid Credentials');
            } else {
                req.user = decoded;
                next();
            }
        });
    }

};

module.exports = isLoggedin;