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

