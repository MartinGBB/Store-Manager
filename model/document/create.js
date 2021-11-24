const connection = require('../connection');

const create = async (collection, entity) => (await connection())
  .collection(collection).insertOne(entity); 

module.exports = create;
