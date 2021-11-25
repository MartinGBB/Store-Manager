const Products = require('../../model/document')('products');
const Validation = require('../../middleware/validations/verifications');

const validName = async (name) => {
  // const productName = await Products.findName(name);
  const productSize = await Validation.nameLength(name);
  if (productSize.error) return productSize;
  return true;
};

const validQuantity = async (quantity) => {
  const typeQuantity = await Validation.typeOfQuantity(quantity);
  if (typeQuantity.error) return typeQuantity;
  
  const quantityLength = await Validation.minQuantity(quantity);
  if (quantityLength.error) return quantityLength;
  return true;
};

const update = async (product) => {
  const nameValidation = await validName(product.name);
  const quantityValidation = await validQuantity(product.quantity);
  
  if (nameValidation.error) return nameValidation;
  if (quantityValidation.error) return quantityValidation;
  
  const updateProduct = await Products.update(product);
  return updateProduct;
};

module.exports = update;
