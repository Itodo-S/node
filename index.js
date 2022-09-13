const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();


app.use('/api/post', require('./routes/postRoute'));


// app.get('/api/post', (req, res) => {
//     res.status(200).json({message: 'get post'})
// })


app.listen(port, () => { console.log(`app running on port: ${port}`); })

