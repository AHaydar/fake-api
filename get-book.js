const axios = require('axios');

//Make a request for a book with a given ID
axios.get('/books/3')
.then( function (response) {
    //handle success
    console.log(response);
})
.catch(function (error) {
    //handle error
    console.log(error)
})