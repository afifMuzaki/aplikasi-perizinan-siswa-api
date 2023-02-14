const express = require('express');
const dotenv = require('dotenv');
const test = require('./app/routes/auth');

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(test);

app.listen(port, host, () => console.log(`Server run on http://${host}:${port}`));