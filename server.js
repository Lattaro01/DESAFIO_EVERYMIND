const express = require('express');
const mysql = require ('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 127.0.0.1
    user: root
    password: 2604,
    database: DESAFIO_EVERYMIND
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/produtos', (req, res));
app.post('/produtos', (req, res));
app.put('/produtos/:id' (req, res));
app.delete('/produto/:id' (req, res));
app.listen(port, (){
  console.log('Server listening at jdbc:mysql://127.0.0.1:3306/?user=root')
});