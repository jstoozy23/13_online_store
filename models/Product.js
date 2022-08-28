const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
{
    product_name: {
      type: DataTypes.STRING,
      allNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(4,2),
      allNull: false,
    },
    stock: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      references: 'category',
      key: 'id'    
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
    }
    
  );

module.exports = Product;
