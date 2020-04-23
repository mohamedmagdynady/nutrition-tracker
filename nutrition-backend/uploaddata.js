// const csv = require('csv-parser');
// const fs = require('fs');
// const Fooditem=require('./models/fooditems')
 
// fs.createReadStream('data2.csv')
//   .pipe(csv())
//   .on('data',async (row) => {
    
//     const food = new Fooditem(
//         row)

//     try {
//         await food.save()
//         //res.status(201).send(food)
//     } catch (e) {
//         console.log(e)
//     }
    
// //console.log(row.Name);
//  })
  
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });
// // Fooditem.create({ Protein: 20 }, function (err, jellybean, snickers) {
// //     if (err) 
// //     console.log(err)
// //     else{
// //         console.log("saved")
// //     }// ...
// //   });

// // const x={
// //     'Name': 'Lettuce',
// //     Calories: '15',
// //     Fat: '0',
// //     Protein: '1',
// //     Carbs: '3',
// //     Fiber: '1'
// //   }
// // console.log(x)