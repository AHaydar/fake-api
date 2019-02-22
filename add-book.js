const axios = require('axios');
axios.post('http://localhost:3000/books', {
	"id": 5,
	"title": "My New Book",
	"author": "Cool Author"
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
  });