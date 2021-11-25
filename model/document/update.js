const { ObjectId } = require('mongodb');
const connection = require('../connection');

const update = async (collection, entity) => {
  const { id, name, quantity } = entity;
  const updateProduct = { $set: { name, quantity } };

  await (await connection()).collection(collection).updateOne({ _id: ObjectId(id) }, updateProduct);
  return { ...entity };
};

module.exports = update;
