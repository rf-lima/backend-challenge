const Products = require('../models/Products');

module.exports = {
    async index(req, res) {
        const products = await Products.findAll();

        return res.json(products);
    },


    async store(req, res) {
        const { sku, name, price } = req.body;

        const products = await Products.create( { sku, name, price });

        return res.json(products);
    }

};