/**
 * Created by Mesasix on 15/07/2016.
 */
var express = require("express");
var app = express();

var blocks = {
    'Fixed' : 'Fastened Securely in position',
    'Movable' : 'Capable of being moved',
    'Rotating' : 'Moving in a circle around its center'
};

//middlewares
app.use(express.static('public'));

// app.get('/', function (request, response) {
//    response.send(__dirname + '/index.html');
// });

app.get('/blocks', function (request, response){
   var blocks = ['Fixed', 'Movable', 'Rotating'];
    if ( request.query.limit >= 0 ){
        response.json( blocks.slice(0, request.query.limit) );
    }else {
        response.json(blocks); //same as .send()
    }
});

app.get('/blocks/:name', function (request, response) {
    var description = blocks[request.params.name];
    if(!description){
        response.status(404).json('No description found for '+request.params.name);
    }else {
        response.json(description);
    }
});

app.listen(8080, function () {
    console.log("Listening to port 8080");
});