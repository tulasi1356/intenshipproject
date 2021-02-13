var express = require('express');
// var cookieParser = require('cookie-parser');
const http = require('http');
var app = express();
// const connectDB = require('./dbconnections/connections')
var session = require('express-session')
const auth=require('./auth');
var serverPort = 3000;
const PORT = process.env.PORT || 5000;
// const sell = require('./sell');
const path=require('path')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const bodyparser=require('body-parser') 
// connectDB()
app.use(express.json());


app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
var sess={
  name:'sid',
  resave:false,
  saveUninitialized:true,
  secret:'a',
  cookie:{
    maxAge:100*60*69*2,
    sameSite:false,
    secure:false,
    httpOnly:false,
  }  
}
app.use(session(sess))
app.use(express.static(path.join(__dirname,'dist/frontend')))


app.use('/auth',auth);;
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname,'/dist/back/index.html'))
  
})
app.listen(PORT,'0.0.0.0', () => {
  console.log(`serving on port`)
})
