// BOILER PLATE TO CREATE DATABASE
const
    express = require('express'),
    app = express(),
    PORT = 3000;

// CONNECT QUOTES DATABASE
const quotes = require('./db');

// MIDDLEWARE conenction
app.use(express.json());

var id = 2;

// CONNECT ROOT ROUTE
app.get('/', (req, res) => {
    res.json({'success': true});
});

// INDEX : LOAD ALL QUOTES
app.get('/quotes', (req, res) => {
    res.json({'success': true , quotes});
});

// FIND/SHOW specfic quote
app.get('/quotes/:id', (req, res) => {
    let quote = quotes.find(x => x.id == req.params.id);
    res.json({'success': true, quote});
});


// CREATE NEW QUOTE and add new parameter of author
app.post('/quotes', (req, res) => {
    quotes.push({...req.body, id});
    id++;
    res.json({'success': true, quotes});
});

// UPDATE quote


// LISTENING TO PORT 3000
app.listen(3000, err => {
    console.log(err || 'Application is listening to PORT 3000');
});