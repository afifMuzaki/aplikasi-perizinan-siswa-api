// Modules
const express = require('express');
const dotenv = require('dotenv');
// Router
const router = require('./app/routes/router')

dotenv.config();
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router.siswaRouter);

app.listen(port, host, () => console.log(`Server run on http://${host}:${port}`));