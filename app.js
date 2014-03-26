var express = require("express");
 
var app = express();

var Bookshelf = require('bookshelf');
Bookshelf.MS = Bookshelf.initialize({
	client:'mysql',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DBASE,
		insecureAuth:true
	}
});

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/app');
  app.use(express.logger());
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  //place this above static so that routes are used before static files
  app.use(app.router);

  app.use(express.static(__dirname + '/app'));
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(req, res) {
  res.render('index.html')
});

app.get('/reviews', require('./app/routes/reviews'));

app.get('/topics/:reviewid', require('./app/routes/topics'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
