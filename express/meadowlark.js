var express = require("express");
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/',function (req, res) {
  res.type('text/plain');
  res.send('home');
});
app.get('/about',function (req, res) {
  res.type('text/plain');
  res.send('about');
});
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 页面！');

});
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 页面！');

});

app.listen(
  app.get('port'),function () {
    console.log('http://localhost' + app.get('port') + ';dd');
  }
)
