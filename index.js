const express= require('express');
const app= express();

app.get('/',()=>{
    req.send("working");
})

app.listen(proesss.env.PORT ||3000);