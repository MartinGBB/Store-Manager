const Products = require('../../model/document')('products');
const Verifications = require('../../middleware/validations/verifications');

const validName = async (name) => {
  const productName = await Products.findName(name);

  const productExist = await Verifications.existingProduct(productName);
  if (productExist.error) {
    return productExist;
  }

  const productSize = await Verifications.nameLength(name);
  if (productSize.error) return productSize;
  return true;
};

const validQuantity = async (quantity) => {
  const typeQuantity = await Verifications.typeOfQuantity(quantity);
  if (typeQuantity.error) return typeQuantity;
  
  const quantityLength = await Verifications.minQuantity(quantity);
  if (quantityLength.error) return quantityLength;
  return true;
};

const create = async (products) => {
  const nameValidation = await validName(products.name);
  if (nameValidation.error) return nameValidation;

  const quantityValidation = await validQuantity(products.quantity);
  if (quantityValidation.error) return quantityValidation;
  const result = await Products.create(products);
  return result;
};

module.exports = {
  create,
};
