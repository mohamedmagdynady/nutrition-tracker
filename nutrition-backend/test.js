function createrecords(Calories_per_day){
    var records=[]
    var d=new Date()
    var recday=d.getDate()
    var recmonth=d.getMonth()
    var c=0;
    var recday2=recday+c
    for(var i=0;i<30;i++){
        // if(recday2>29){
       
        //     recday=1;
        //     c=0
        //     recmonth+=1
        //   }
       recday2=recday+i
      c+=1
     // console.log(c,recmonth,recday2)
    //   if(recday2>29){
       
    //     recday=1;
    //     c=0
    //     recmonth+=1
    //   }
      console.log(c,recmonth,recday2)
    var rec={
    //   console.log(d.getDate())
    // console.log(d.getMonth())
    // console.log(  d.getFullYear())
    date:recday2+'-'+recmonth,
    calories_left:Calories_per_day,
    calories_taken:0,
    protein_taken:0,
    }
    records.push(rec)
      }
  return records
    }

    createrecords(5)