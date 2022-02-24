var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
  response.render('index', {
    subject: 'Pug template engine',
    name: 'our template',
    link: 'https://google.com',
    posts: [
      {
        author: 'Janith Kasun',
        image: 'https://picsum.photos/500/500',
        comments: [
          'This is the first comment',
          'This is the second comment',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
        ]
      },
      {
        author: 'John Doe',
        image: 'https://picsum.photos/500/500?2',
        comments: [
        ]
      }
    ]
  });
});

module.exports = router;
