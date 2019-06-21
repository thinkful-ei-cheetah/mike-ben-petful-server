'use strict';

const express = require('express');
const { cats }  = require('../data/catData');

const catRouter = express.Router();

catRouter
  .route('/cat')
  .get((req, res) => {
    return res.json(cats);
  })

catRouter
  .route('/cat/delete')
  .delete((req, res) => {
    cats.enqueue(
      cats.dequeue()
    )
    return res.json(cats);
  })

  module.exports = catRouter;