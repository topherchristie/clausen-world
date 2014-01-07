var express = require('express');
var cons = require('consolidate');
var swig = require('swig');
swig.init({
    root: __dirname + '/views'
});
var app = express();

app.configure(function(){
     app.set('view options', { layout: false });
  app.engine('html',cons.swig);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use("/public",express.static(__dirname + '/public'));
});



app.get('/', function(req,res){
    res.render("index");
});

var port = process.env.PORT || 5000;

app.listen(port,function(){
	console.log("listening on",port);
});
