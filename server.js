const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 });

// respond with "hello world" when a GET request is made to the homepage
app.get('/create_post', function(req, res) {
    res.render('pages/create_post');    
});
app.get('/places_to_visit', function(req, res) {
    res.render('pages/places_to_visit');
});
app.get('/home', function(req, res) {
    res.render('pages/home');
});


app.get('/places_to_visit', function(req, res) {
    res.render('pages/places_to_visit');
});