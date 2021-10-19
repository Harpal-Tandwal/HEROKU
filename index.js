const express= require('express');
const app= express();

app.get('/',()=>{
    req.send("working");
})

app.listen(process.env.PORT ||3000,()=>{
    console.log("server on")
});