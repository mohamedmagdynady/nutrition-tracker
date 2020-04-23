var express = require('express');
var router = express.Router();
var Fooditem=require('../models/Fooditems')



module.exports = router;

 async function get_nutrition_value(Name){
try{
    let fooditem = await Fooditem.find({Name:Name}).limit(1)
        if (!fooditem) {
            return "error"
        }

        return fooditem
    } catch (e) {
        return "error"
    }

}


router.get('/get_nutrition_value/:Name', async (req, res) => {
    
    // Fooditem.find({Name:req.params.Name},(err,tasks)=>{
    //     res.send(tasks)
    // })
    try {
        console.log(req.params)
        //{name: { $regex: '.*' + req.params.name + '.*' } }
        var name=req.params.Name.toLowerCase()
        //let fooditem = await Fooditem.find({Name: req.params.Name   }).limit(1)
        // let fooditem = await Fooditem.find({Name: { $regex: /.*ana.*/ }  }).limit(1)
    //let fooditem = await Fooditem.find({Name:  new RegExp("/.*"+req.params.Name.toLowerCase()+".*/") }).limit(1)
//let fooditem = await Fooditem.find({Name: new RegExp(req.params.Name)}).limit(1)
    let fooditem = await Fooditem.find({Name: new RegExp(req.params.Name)})
    
        if (!fooditem) {
            return res.status(404).send("nothing is found with this name")
        }
       var min=fooditem[0].Name.length
       var index=0
    for (i in fooditem){
        if(fooditem[i].Name.length<min){
            min=fooditem[i].Name.length
            index=i;

        }


    }

        // res.send(fooditem[0].Protein.toString())
        res.send(fooditem[index])
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router;