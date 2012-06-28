var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send('hello brian, this worked');
});

var port = process.env.PORT || 5000;

app.listen(port,function(){
	console.log("listening on",port);
});
