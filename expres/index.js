
const express = require('express');

const app = express();

app.get("/", (req, res)=> {
    // res.end("hello exprss");
    res.sendFile('index.html', {root: __dirname})
})
app.get("/about", (re1, res)=>{
    res.redirect("/");
})
//Error page if url match not found..... 
// It has to be on the bottom only as it is sequential programming 
app.use((req, res)=>{
    res.status(404).send("PAGE NOT FOUND 404 ERROR.....................")
})
app.listen(8080)