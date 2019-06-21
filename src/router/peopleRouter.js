'use strict';

const express = require('express');
const { people }  = require('../data/peopleData');

const peopleRouter = express.Router();

peopleRouter
  .route('/api/people')
  .get((req, res) => {
    return res.json(people);
  })

peopleRouter
  .route('/api/people/delete')
  .delete((req, res) => {
    people.enqueue(
      people.dequeue()
    )
    return res.json(people);
  })

module.exports = peopleRouter;