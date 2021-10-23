
 const request = require("request");
setInterval( async()=> { 
   request({
     url :"https://twetterclone.herokuapp.com/update",
     json:true
},(err,res,body)=>{
    console.log("sent")
})}, 60000);

// to run on Heroku
require('http').createServer((req, res) => res.end()).listen(process.env.PORT || 3000);

