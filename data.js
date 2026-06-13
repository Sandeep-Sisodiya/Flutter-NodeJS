const user = require('./models/user');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/database',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error',(error) => console.error(error));
    db.on('connected', ()=> console.log('Connected to database'));

app.get('/users', function (req, res) {
    res.send(users);
});

app.listen(1000, function () {
    console.log("Server is running in port http://localhost:1000");
})

const users = [
    new user(1, "abc", 20),
    new user(2, "xyz", 30),
    new user(3, "pqr", 40),
    new user(4, "mno", 50),
    new user(5, "jkl", 60, "admin"),
]

console.log(users);
