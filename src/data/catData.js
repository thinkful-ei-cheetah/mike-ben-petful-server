const Queue = require('../queue');
const cats = new Queue();

cats.enqueue(
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
);

cats.enqueue(
  {
    imageURL:'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
    imageDescription: 'A small cat in a blanket.',
    name: 'Tiny',
    sex: 'Female',
    age: 0,
    breed: 'I think its a cat',
    story: 'Got lost in a house and was never found'
  }
);

cats.enqueue(
  {
    imageURL:'https://images.unsplash.com/photo-1533568367292-63cab2810e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 
    imageDescription: 'Just a white cat.',
    name: 'Snow',
    sex: 'Male',
    age: 3,
    breed: 'White cat',
    story: 'The house so white so it blended in so well'
  }
);

cats.enqueue(
  {
    imageURL:'https://www.drawingtutorials101.com/drawing-tutorials/For-Kids/Animals-with-their-Names/cat-from-word-cat/how-to-draw-Cat-from-word-Cat-step-1.png', 
    imageDescription: 'Cat.',
    name: 'Cat',
    sex: 'Female',
    age: 1,
    breed: 'Cat',
    story: 'Just a cat'
  }
);

module.exports = { cats };