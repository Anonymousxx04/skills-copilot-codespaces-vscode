// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Create an array for comments
const comments = [
    { id: 1, author: 'John', content: 'Content of John' },
    { id: 2, author: 'Doe', content: 'Content of Doe' },
    { id: 3, author: 'Smith', content: 'Content of Smith' }
];

// GET method
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST method
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1
    };
}); // Add a closing curly brace here
