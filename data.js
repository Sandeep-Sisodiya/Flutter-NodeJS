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

db.on('error', (error) => console.error(error));
db.on('connected', () => console.log('Connected to database'));

app.use(express.json());

const userschema = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    role: {type: String, default: 'user'},
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userschema);

app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        role: req.body.role
    });
    try{
        const  newUser = await user.save();
        res.status(201).send(newUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

app.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

app.put('/users/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        user.name = req.body.name;
        user.age = req.body.age;
        user.role = req.body.role;
        const updatedUser = await user.save();
        res.json(updatedUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

app.delete('/users/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

app.listen(2000, function () {
    console.log("Server is running in port http://localhost:2000");
})





// app.get('/users', function (req, res) {
//     res.send(users);
// });

// app.listen(1000, function () {
//     console.log("Server is running in port http://localhost:1000");
// })

// const users = [
//     new user(1, "abc", 20),
//     new user(2, "xyz", 30),
//     new user(3, "pqr", 40),
//     new user(4, "mno", 50),
//     new user(5, "jkl", 60, "admin"),
// ]

// console.log(users);
