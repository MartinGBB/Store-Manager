const { find } = require('./find');
const create = require('./create');
const findById = require('./findById');
const { findName } = require('./find');
const update = require('./update');
const remove = require('./remove');

module.exports = (collection) => ({
    find: async () => find(collection),
    create: async (entity) => create(collection, entity),
    findById: async (entity) => findById(collection, entity),
    findName: async (entity) => findName(collection, entity),
    update: async (entity) => update(collection, entity),
    remove: async (entity) => remove(collection, entity),
  });
