const express = require('express');
const create = require('./create');
const list = require('./list');
const get = require('./get');
const remove = require('./remove');
const update = require('./update');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);
router.get('/:id', get);
router.delete('/:id', remove);
router.put('/:id', update);

module.exports = router;
