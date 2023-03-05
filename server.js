// Modules
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const session = require('express-session');
// Router
const router = require('./app/routes/router');
// Middleware
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const sessionSecret = process.env.SESSION_SECRET;

app.use(cookieParser());
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: sessionSecret
// }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

app.listen(port, host, () => console.log(`Server run on http://${host}:${port}`));