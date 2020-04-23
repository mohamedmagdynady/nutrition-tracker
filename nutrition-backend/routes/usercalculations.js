const express = require('express')
const User = require('../models/user')
const Fooditem=require('../models/Fooditems')
//const funct=require('../routes/fooditems')
const auth = require('../middleware/auth')
const router = new express.Router()
var d=new Date()
var recday=Number( d.getDate())
var recmonth=d.getMonth()
var todaydate=recday+'-'+recmonth


router.patch('/eated-today',auth, async (req, res) => {
    try{
        var qunatity=req.body.quantity/100
        console.log(qunatity)
    const food= await Fooditem.find({Name: new RegExp(req.body.Name)})
if(!food)
res.status(400).send("not found")
var index=0
var min=food[0].Name.length
for (i in food){
    if(food[i].Name.length<min){
        min=food[i].Name.length
        index=i;

    }
}

   // console.log(index)
    // console.log(food[index])
    var updatedrecord;
    for(element in req.user.records){
       // console.log(req.user.records[element].date)
    if(req.user.records[element].date.localeCompare(todaydate)==0){   
        
        req.user.records[element].calories_taken+=food[index].Calories*qunatity
        req.user.records[element].calories_left-=food[index].Calories*qunatity
        if(req.user.records[element].calories_left<0)
            req.user.records[element].calories_left=0
        req.user.records[element].protein_taken+=food[index].Protein*qunatity
  //  var id = mongoose.Types.ObjectId();
        req.user.records[element].foodlist.push({"Name":req.body.Name,"Quantity":req.body.quantity+" g","Calories":food[index].Calories*qunatity,"Protein":food[index].Protein*qunatity,"Carbs":food[index].Carbs*qunatity})
        updatedrecord=req.user.records[element]
        try{
        await req.user.save()
        }
        catch(e){
            res.status(500).send()
        }
    }

}
    
  
// });
res.send(updatedrecord)

    }
    catch(e){
        res.status(500).send()
    }
    

}
)

router.get('/todayprogress',auth,(req,res)=>{

    for(element in req.user.records){
        // console.log(req.user.records[element].date)
     if(req.user.records[element].date.localeCompare(todaydate)==0)
     res.send(req.user.records[element])

    }

    
})


module.exports = router