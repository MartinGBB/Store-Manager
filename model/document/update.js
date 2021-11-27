const { ObjectId } = require('mongodb');
const connection = require('../connection');

const update = async (collection, entity) => {
  const { id } = entity;
  const data = { $set: { entity } };

  await (await connection()).collection(collection).updateOne({ _id: ObjectId(id) }, data);
  return entity;
};

module.exports = update;
