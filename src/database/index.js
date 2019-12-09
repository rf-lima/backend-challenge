const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Products = require('../models/Products');
const Customers = require('../models/Customers');


const connection = new Sequelize(dbConfig);


Products.init(connection);
Customers.init(connection);




module.exports = connection;