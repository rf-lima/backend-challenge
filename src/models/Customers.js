const { Model, DataTypes } = require('sequelize');


class Customers extends Model {
    static init(sequelize) {
        super.init ({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {    
            // Conexão com Banco de dados //
            sequelize
        })
    }
}

module.exports = Customers;