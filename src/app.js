const express = require('express');
const path = require('path');
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.post('/login', (req, res) => {
    res.redirect('/');
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.post('/register', (req, res) => {
    res.redirect('/');
});


app.listen(process.env.PORT || 3030, () => {
    console.log(`Servidor iniciado en http://localhost:${process.env.PORT}`);
});
