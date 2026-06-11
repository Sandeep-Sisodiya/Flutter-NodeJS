var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({
        name: "anyName",
        age: "anyAge",
        address: "anyAddress"
    });
});

app.listen(1000, function () {
    console.log("Server is running in port http://localhost:1000");
})