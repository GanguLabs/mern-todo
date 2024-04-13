const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan('tiny'));

app.get('/todos', (req, res) => {
    res.send('List of Todos');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});