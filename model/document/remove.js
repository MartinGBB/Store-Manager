const { ObjectId } = require('mongodb');
const connection = require('../connection');

const remove = async (collection, id) => {
  (await connection()).collection(collection).deleteOne({ _id: ObjectId(id) });
  return { id };
};

module.exports = remove;
