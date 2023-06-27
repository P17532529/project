const express = require('express');
const dotenv = require('dotenv').config();
const server = express();

server.use('/api/contacts',require('./routes/contactRoutes'))

server.listen(process.env.Port,()=>{
    console.log("server started")
})