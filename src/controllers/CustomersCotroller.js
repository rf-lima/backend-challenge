const Customers = require('../models/Customers');

module.exports = {
    // async index(req, res) {
    //     const customers = await Customers.findAll();

    //     return res.json(customers);
    // },


    async store(req, res) {
        const { name, cpf, email } = req.body;

        const customers = await Customers.create( { name, cpf, email });

        return res.json(customers);
    }

};