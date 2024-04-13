const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./router');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});