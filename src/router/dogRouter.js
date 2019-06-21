'use strict';

const express = require('express');
const { dogs }  = require('../data/dogData');

const dogRouter = express.Router();

dogRouter
  .route('/dog')
  .get((req, res) => {
    return res.json(dogs);
  })

dogRouter
  .route('/dog/delete')
  .delete((req, res) => {
    dogs.enqueue(
      dogs.dequeue()
    )
    return res.json(dogs);
  })

module.exports = dogRouter;