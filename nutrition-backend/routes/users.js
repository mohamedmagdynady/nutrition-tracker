const express = require('express')
//const multer = require('multer')
//const sharp = require('sharp')
const User = require('../models/user')
const auth = require('../middleware/auth')
const bcrypt=require('bcryptjs')
const router = new express.Router()

function fat_level_calc(gender , body_fat ){
if(gender=="Male"){
  
    if(body_fat<=14)return 1;
    if(body_fat<=20)return 0.95;
    if(body_fat<=28)return 0.90;
  
}else{
  if(gender=="Female"){
    
      if(body_fat<=18)return 1
      if(body_fat<=28)return 0.95;
      if(body_fat<=38)return 0.90;
    
  }
  
}
return 1;
}

function createrecords(Calories_per_day){
  var records=[]
  var d=new Date()
  var recday=Number( d.getDate())
  var recmonth=d.getMonth()
  var c=0;
  var recday2=recday+c
  for(var i=0;i<30;i++){
      if(recday2>30){
     
          recday=1;
          c=0
          recmonth+=1
        }
     recday2=recday+c
    c+=1

  var rec={

  date:recday2+'-'+recmonth,
  calories_left:Calories_per_day,
  calories_taken:0,
  protein_taken:0,
  }
  records.push(rec)
    }
return records
  }

  

router.post('/users', async (req, res) => {
    var user = new User(req.body)
    //console.log(req.body.gender)
    var Calories_per_day=user.weight*24
    if(user.gender=="male")
      Calories_per_day=Calories_per_day*0.9
    
    switch(user.activity_level){
      case('light'):Calories_per_day=Calories_per_day*1.33;break;
      case('very light'):Calories_per_day=Calories_per_day*1.55;break;
      case('moderate'):Calories_per_day=Calories_per_day*1.65;break;
      case('heavy'):Calories_per_day=Calories_per_day*1.8;break;
      case('very heavy'):Calories_per_day=Calories_per_day*2;break;
      default:Calories_per_day=Calories_per_day*1.65;break;
    }
    
    Calories_per_day=Calories_per_day*fat_level_calc(user.gender,user.body_fat_level)
    
    switch(user.goal){
case('decrease'):Calories_per_day=Calories_per_day-350;break;
case('increase'):Calories_per_day=Calories_per_day+350;break;
default:break;
    }
    user.Calories_per_day=Calories_per_day
    
user.records=createrecords(user.Calories_per_day)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email })
        if (!user) {
            res.status(400)('wrong email')
        }
        //res.send({user})
        bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if (err) { throw (err); }
                    
                });
                const token = await user.generateAuthToken()
                res.send({ user, token })
        
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        console.log("print"+req.token)
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send({done:"done"})
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    // const allowedUpdates = ['name', 'email', 'password', 'age','weight','height']
    // const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' })
    // }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})






module.exports = router

/*
router.post('/users', async (req, res) => {
    var user = new User(req.body)
    //console.log(req.body.gender)
    var Calories_per_day=req.body.weight*24
    if(req.body.gender=="male")
      Calories_per_day=Calories_per_day*0.9
    
    switch(user.activity_level){
      case('light'):Calories_per_day=Calories_per_day*1.33;break;
      case('very light'):Calories_per_day=Calories_per_day*1.55;break;
      case('moderate'):Calories_per_day=Calories_per_day*1.65;break;
      case('heavy'):Calories_per_day=Calories_per_day*1.8;break;
      case('very heavy'):Calories_per_day=Calories_per_day*2;break;
      default:Calories_per_day=Calories_per_day*1.65;break;
    }
    
    Calories_per_day=Calories_per_day*fat_level_calc(user.gender,user.body_fat_level)
    
    switch(user.goal){
case('decrease'):Calories_per_day=Calories_per_day-350;break;
case('increase'):Calories_per_day=Calories_per_day+350;break;
default:break;
    }
    user.Calories_per_day=Calories_per_day
    
user.records=createrecords(user.Calories_per_day)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})


*/