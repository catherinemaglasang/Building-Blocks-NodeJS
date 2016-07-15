/**
 * Created by Mesasix on 15/07/2016.
 */
var express = require("express");
var app = express();

//middlewares
app.use(express.static('public'));

// app.get('/', function (request, response) {
//    response.send(__dirname + '/index.html');
// });

app.get('/blocks', function (request, response){
   var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks); //same as .send()
});

app.listen(8080, function () {
    console.log("Listening to port 8080");
});