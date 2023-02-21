// Modules
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
// Router
const router = require('./app/routes/router');
// Middleware
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(port, host, () => console.log(`Server run on http://${host}:${port}`));