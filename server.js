'use strict';


const express = require('express');

const errorHandler = require('./handleFunctions/internalServerError.js')
const notFoundHandler = require('./handleFunctions/notFound.js');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('HELLO WORLD !!!')
})

app.get('/info', (req, res) => {
    res.status(200).json({
        name: "Nihad Zeidan",
        age: '24 Years Old'
    })
});


app.get('/bad-request', (req, res) => {
    throw new Error('I just created this error')
});

app.get('/second-bad-req', (req, res) => {
    let anything;
    anything.push(24);
});





//  MiddleWares 
app.use('*', notFoundHandler);
app.use(errorHandler);


function portListening(port) {
    app.listen(port, () => console.log(`Listening on ${port}`))
}


module.exports = {
    app: app,
    start: portListening
}