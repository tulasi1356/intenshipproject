const express=require('express')
const router=express.Router()
// const User = require('./dbconnections/User');
var ObjectId = require('mongodb').ObjectID;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var session = require('express-session')
var url = "mongodb://localhost:27017/";
var dbo
var password1;
var OTP
// const password1;
const bcrypt = require('bcrypt');
// const uniqid = require('uniqid');
const { getMaxListeners } = require('process');
const saltRounds = 10;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     dbo = db.db("learningbackend");
     
  })

  // // USED TO DELETE DATA IN COLLECTION
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("learningbackend");
  //   //Delete the "customers" collection:
  //   dbo.collection("registerdetails").drop(function(err, delOK) {
  //     if (err) throw err;
  //     if (delOK) console.log("Collection deleted");
  //     db.close();
  //   });
  // });

  router.post('/signup', async (req,res) => {
    let hash = await bcrypt.hash(req.body.password,saltRounds)
    myobj={firstname:req.body.firstname,lastname:req.body.lastname,mobilenumber:req.body.mobilenumber,dateofbirth:req.body.dateofbirth,email:req.body.email,password:hash,verify:false,}
    // console.log("usermodel",userModel);
        try {
          dbo.collection("registerdetails").find({email:req.body.email}).toArray(function(err, result) { 
            console.log(result.length)  
            // ***Already Signup Completed ***
          if(result.length > 0 && result[0].verify == true) {
              res.send(JSON.stringify('account exists'));
          }
          // *** Verification Not Completed ***
          else if(result.length >0 && result[0].verify == false) {
            res.send(JSON.stringify('Verification not completed go and check your mail'));
          }
          // *** New User ***
          else {
            res.send(JSON.stringify('check your mail'));
            // console.log('else',req.body.email)
              dbo.collection("registerdetails").insertOne(myobj, function(err, res) {
                // console.log('ressss',res.ops[0].name)
                
                 // ******** MAIL VERIFICATIONS *********
                 var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'wolvesofthevalleysspardha@gmail.com',
                    pass: 'fmt@12345'
                  }
                });
                console.log(req.body.email)
                var mailOptions = {
                  from: 'devasanna',
                  to: req.body.email,
                  subject: 'Verification code',
                  text:hash,
                  html:'welcome '+res.ops[0].firstname+'.'+res.ops[0].lastname + 'to confirm your mail <a href="http://localhost:5000/auth/verify?id='+res.ops[0]._id+'">click</a><br>'
                };
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
                });
                // *** END OF MAIL VERIFICATION ***

            });
          //  *** END OF INSERTONE ***
        }
       
    });
        } 
        catch{
          res.status(500).send()
        }       
})
router.get('/verify',function(req,res) {
  // console.log(req)
  id=req.query.id
  console.log('id=',req.query.id,id)
  id=ObjectId(id)
  dbo.collection("registerdetails").find({_id:id}).toArray(function(err, result) {
    console.log('password',result)
    if(err){
      res.send(JSON.stringify("unable to verify your mail"))
  }
  else if(result.length==0){
      res.send(JSON.stringify("unable to verify your mail"))
  }
  else if(result[0].verify==true){
      // res.send(JSON.stringify("your mail is already  verified"))
      res.sendFile(__dirname + '/alreayverifycompleted.html');
  } else {
    dbo.collection("registerdetails").findOneAndUpdate({_id:id},{$set: {verify:true}},{new:true},
      function(err,response){
          if(err) throw err
          // console.log(response,'final');
          // res.send(JSON.stringify("email is verified"))
          res.sendFile(__dirname + '/verifycompleted.html');

      })

  }

  })
})

router.post('/login',function(req,res){
  dbo.collection("registerdetails").find({email:req.body.email}).toArray(function(err, result) {
    console.log('result',result);
    if(result.length > 0 &&  !bcrypt.compareSync(req.body.password,result[0].password)) {
      res.send(JSON.stringify('password is incorrect'))
    } else if(result.length === 0) {
      res.send(JSON.stringify('account does not exit'))
    } else {
      req.session.details = result[0].name;
      // console.log('username',result[0].name);
      res.send(JSON.stringify(result[0].name))
      // console.log('sesssions',req.session.details);
    }
  })

})

module.exports = router;