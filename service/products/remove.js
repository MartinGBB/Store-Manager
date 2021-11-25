const Products = require('../../model/document')('products');
const Validation = require('../../middleware/validations/verifications');

const existId = async (product) => {
  const findId = await Products.findById(product);
  const existingProduct = await Validation.findFail(findId);
  if (existingProduct.error) return existingProduct;
  return true;
};

const remove = async (product) => {
  const productExist = await existId(product);

  if (productExist.error) return productExist;
  const productDelete = Products.remove(product);
  return productDelete;
};

module.exports = remove;
