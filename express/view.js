var express = require("express");
var app = express();
var fortunes=[
  "不好意思什么都没有",
  "一辆车",
  "一套房",
  "一个女朋友"
]
//
var handlebars = require('express3-handlebars')
                 .create({defaultLayout:'main'});
    app.engine('handlebars',handlebars.engine);
    app.use(express.static(__dirname + '/public'));
    app.set('view engine','handlebars');
    app.set('port', process.env.PORT || 3000);

    app.get('/',function (req, res) {
      res.render('home');
    });
    app.get('/about',function (req, res) {
      var goodLuck = fortunes[Math.floor(Math.random()*fortunes.length)];
      res.render('about',{fortunes:goodLuck});
    });
    app.use(function(req, res, next){
      res.status(404);
      res.render('404');
    });
    app.use(function(err, req, res, next){
      console.error(err.stack);
      res.status(500);
      res.render('500');

    });

    app.listen(
      app.get('port'),function () {
        console.log('http://localhost' + app.get('port') + ';dd');
      }
    )
