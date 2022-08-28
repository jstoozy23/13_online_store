const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    tag_id: {
      references: 'Tag_id',
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
