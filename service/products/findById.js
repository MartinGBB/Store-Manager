const Products = require('../../model/document')('products');
const Validation = require('../../middleware/validations/verifications');

const existId = async (product) => {
  const findId = await Products.findById(product);
  const existingProduct = await Validation.findFail(findId);
  if (existingProduct.error) return existingProduct;
  return true;
};

const findById = async (id) => {
  const product = await existId(id);
  if (product.error) return product;
  const result = await Products.findById(id);
  console.log(result);
  return result;
};

module.exports = findById;
