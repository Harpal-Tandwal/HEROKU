const express= require('express');
const app= express();

app.on('/',(req, res)=>{
   req.render("hello");
})

app.listen(process.env.PORT ||3000,()=>{
    console.log("server on")
});
