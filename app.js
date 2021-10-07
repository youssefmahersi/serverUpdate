const request = require("request");
setInterval( async()=> { 
    request({
        url :"https://twetterclone.herokuapp.com/update",
        json:true

    },(err,res,body)=>{
        console.log("sent")
    })
 }, 60000);


