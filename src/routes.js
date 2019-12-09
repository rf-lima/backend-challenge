const express = require('express');

const ProductsController = require('./controllers/ProductsController');
const CustomersController = require('./controllers/CustomersCotroller');

const routes = express.Router();


routes.get('/v1/products', ProductsController.index);
routes.post('/v1/products', ProductsController.store);




routes.post('/v1/customers', CustomersController.store);



module.exports = routes;