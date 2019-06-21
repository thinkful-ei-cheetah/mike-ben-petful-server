'use strict';

const express = require('express');
const { cats }  = require('../data/catData');

const catRouter = express.Router();

catRouter
  .route('/api/cats')
  .get((req, res) => {
    return res.json(cats);
  })

catRouter
  .route('/api/cats/delete')
  .delete((req, res) => {
    cats.enqueue(
      cats.dequeue()
    )
    return res.json(cats);
  })

module.exports = catRouter;