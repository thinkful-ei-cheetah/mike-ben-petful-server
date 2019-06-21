'use strict';

const express = require('express');
const { dogs }  = require('../data/dogData');

const dogRouter = express.Router();

dogRouter
  .route('/api/dogs')
  .get((req, res) => {
    return res.json(dogs);
  })

dogRouter
  .route('/api/dogs/delete')
  .delete((req, res) => {
    dogs.enqueue(
      dogs.dequeue()
    )
    return res.json(dogs);
  })

module.exports = dogRouter;