const { Model, DataTypes } = require('sequelize');


class Products extends Model {
    static init(sequelize) {
        super.init ({
            sku: DataTypes.INTEGER,
            name: DataTypes.STRING,
            price: DataTypes.DOUBLE,
        }, {    
            // Conexão com Banco de dados //
            sequelize
        })
    }
}

module.exports = Products;