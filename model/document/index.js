const { find } = require('./find');
const create = require('./create');
const findById = require('./findById');
const { findName } = require('./find');
const update = require('./update');

module.exports = (collection) => ({
    find: async () => find(collection),
    create: async (entity) => create(collection, entity),
    findById: async (entity) => findById(collection, entity),
    findName: async (entity) => findName(collection, entity),
    update: async (entity) => update(collection, entity),
  });
