const axios = require('axios');

//Make a request for a book with a given ID
axios.get('http://localhost:3000/books/3')
.then( function (response) {
    //handle success
    console.log(response.data);
})
.catch(function (error) {
    //handle error
    console.log(error.message)
})