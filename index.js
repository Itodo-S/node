const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMidleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/post', require('./routes/postRoute'));

app.use(errorHandler)

app.listen(port, () => { console.log(`app running on port: ${port}`); })

