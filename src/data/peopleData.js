const Queue = require('../queue');
const people = new Queue();

people.enqueue({name: 'Adam'});
people.enqueue({name: 'Cody'});
people.enqueue({name: 'Cristian'});
people.enqueue({name: 'David'});
people.enqueue({name: 'Elan'});
people.enqueue({name: 'Harrison'});
people.enqueue({name: 'Jonathan'});
people.enqueue({name: 'Kristof'});
people.enqueue({name: 'Levi'});
people.enqueue({name: 'Michael'});
people.enqueue({name: 'Nick'});
people.enqueue({name: 'Peter'});
people.enqueue({name: 'Rahim'});
people.enqueue({name: 'Tauhida'});

module.exports = { people };