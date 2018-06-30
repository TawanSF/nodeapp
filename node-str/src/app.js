'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();
const router = express.Router();
// Conecta ao banco

mongoose.connect('mongodb://tawan:Taw050499@ds018538.mlab.com:18538/ndstr');
// Carrega os Models

const Product = require('./models/product');

// Carregar as rotas
const index = require('./routes/index');
const product = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', index);
app.use('/products', product);
module.exports = app;