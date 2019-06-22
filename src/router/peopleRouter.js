'use strict';

const Queue = require('../queue');
const express = require('express');
const { people }  = require('../data/peopleData');

const peopleRouter = express.Router();

const rePeople = new Queue();
const user = 'You';

peopleRouter
  .route('/api/people')
  .get((req, res) => {
    
    return res.json(people);
  })

peopleRouter
  .route('/api/people/add')
  .post((req, res) => {
    people.enqueue({name: user})

    return res.json(people);
  })

peopleRouter
  .route('/api/people/delete')
  .delete((req, res) => {
    
    if (people.first.value.name === user) {
      people.dequeue();
    } else{
      rePeople.enqueue(people.dequeue())
    }

    if (!people.first) {
      while (rePeople.first !== null) {
        people.enqueue(rePeople.dequeue());
      }
    }
    return res.json(people);
  })

module.exports = peopleRouter;