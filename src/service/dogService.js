const dogData = require('../data/dogData');

let id = 0;
dogData.forEach(dog => {
    dog.id = id
    dog.adopted = false
    id++;
});

const dogService = {

  getDog() {
    let index = Math.floor(Math.random() * Math.floor(dogs.length))
    return dogs[index]
  },

}

module.exports = dogService