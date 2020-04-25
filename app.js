const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


mongoose
    .connect('mongodb+srv://sohaib52:hmz46w46w@cluster0-rif7f.mongodb.net/E-Commerce-Store-TechNest?retryWrites=true&w=majority',{ useNewUrlParser: true })
    .then(result => {
        console.log("Server Connected");
        app.listen(8000);
    })
    .catch(err => {
        console.log(err);
    })
