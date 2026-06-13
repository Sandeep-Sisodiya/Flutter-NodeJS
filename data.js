const user = require('./models/user');
const express = require('express');
const app = express();

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
