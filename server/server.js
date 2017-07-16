const express = require('express');

var app = express();
app.get('/', (req, res)=>{
    res.status(404).send({
        error: "Page not found",
        name: "test 1"
    });
});

app.get('/user', (req, res)=>{
    res.send({
        name: 'Mark Qian',
        age: 23
    });
});


app.listen(3000);

module.exports={app};