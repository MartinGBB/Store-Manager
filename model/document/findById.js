const { ObjectId } = require('mongodb');
const connection = require('../connection');

const findById = async (collection, id) => (ObjectId.isValid(id)
  ? (await connection()).collection(collection).findOne({ _id: ObjectId(id) }) : null);

module.exports = findById;
