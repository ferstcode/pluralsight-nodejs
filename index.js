var express = require('express');
var app = express();

app.get('/tweets/:username',function(req, response) {

    var tweets = [{text: "hola po"}, {text: "cuando nos vemos"}];
    var username = req.params.username; 
    response.locals = {tweets: tweets, name: username};
    response.render('tweets.ejs');
});
app.listen(8080);
