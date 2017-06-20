var express = require('express'),http=require('http');
var bodyParser=require('body-parser');

var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('databases/wda.sqlite3');
app.use(express.static('D:/diorw/css/simpleJsGame'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

app.get('/json', function (req, res,next) {
     db.all("select * from ranktable order by times",function(err,Res){
     if(!err){
       res.send(Res);

     }else{
        console.log(err);
     }
   });
})
app.post('/service',function(req,res){
  var rows = parseInt(req.query.rows);
  var times = parseInt(req.query.times);
  var statement=db.prepare("insert into ranktable(name,rows,times) values(?,?,?)");
  statement.run(req.query.names,rows,times);
  statement.finalize();
  res.send(req.query.names);

});
/*app.get('/json',function(req,res,next){
  res.send({status:'jsoup'});
});*/
var server = app.listen(8081, function () {

  var io = require('socket.io');
  var fs = require("fs");
  if (!fs.existsSync("databases"))
  {
    fs.mkdirSync("databases", function (err)
    {
        if (err) {
            console.log(err);
            return;
        }
    });
  }
  db.run("create table ranktable(name varchar(15) not null,rows int not null,times int not null)",
    function(err,res){
  });
})
