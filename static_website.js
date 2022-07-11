const PORT= process.env.PORT ||4500;

const express = require('express');
const app = express();

const path= require('path');
const staticFolder=path.join(__dirname,'./family');

app.use(express.static(staticFolder));

 app.get('',(res)=>{
    res.render('index');
});


app.listen(PORT, ()=>{
    console.log(`server is up on port ${PORT}✨.`);
})