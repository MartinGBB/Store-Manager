const Products = require('../../model/document')('products');

const find = async () => {
  const products = await Products.find();
  return products;
};

module.exports = find;
