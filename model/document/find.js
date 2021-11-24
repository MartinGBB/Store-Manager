const connection = require('../connection');

const findName = async (collection, name) => {
  const productName = await (await connection()).collection(collection).findOne({ name });  
    if (productName) return productName;
  return false;
};

const find = async (collection) => (await connection()).collection(collection).find({}).toArray();

module.exports = { find, findName };
