const Queue = require('../queue');
const dogs = new Queue();

dogs.enqueue(
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
);

dogs.enqueue(
  {
    imageURL: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'A small dog wearing blue denim collar.',
    name: 'Splummf',
    sex: 'Male',
    age: 2,
    breed: 'Pug',
    story: 'The dog was too cool for his owner'
  }
);

dogs.enqueue(
  {
    imageURL: 'https://images.unsplash.com/photo-1455757618770-0a58b0b28ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'A small dog riding on swings.',
    name: 'Pup',
    sex: 'Male',
    age: 1,
    breed: 'Pit bull',
    story: 'A sad story'
  }
);

dogs.enqueue(
  {
    imageURL: 'https://images.unsplash.com/photo-1457914109735-ce8aba3b7a79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imageDescription: 'A dog on snow.',
    name: 'Wind',
    sex: 'Female',
    age: 1,
    breed: 'Husky',
    story: 'Owner dead, he dead'
  }
);

module.exports = { dogs };