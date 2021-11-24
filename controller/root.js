const express = require('express');
const products = require('./product/router');

const root = express.Router({ mergeParams: true });

root.use('/products', products);

module.exports = root;
