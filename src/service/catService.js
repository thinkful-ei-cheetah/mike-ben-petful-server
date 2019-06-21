const cats = require('../data/catData');

let id = 0;
catData.forEach(cat => {
    cat.id = id
    cat.adopted = false
    id++;
});

const catService = {

  getCat() {
    let index = Math.floor(Math.random() * Math.floor(cats.length))
    return cats[index]
  },

}

module.exports = catService