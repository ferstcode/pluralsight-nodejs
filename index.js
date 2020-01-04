var express = require('express');
var app = express();

app.get('/',function(request, response) {

    var tweets = [{text: "hola po"}, {test: "cuando nos vemos"}]
    response.sendFile(__dirname + "/index.html");
});
app.listen(8080);