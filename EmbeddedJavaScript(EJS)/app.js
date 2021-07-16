
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'MyViews');

app.get("/", (req, res)=> {
    res.render('index', {title: "Jayasairam"});
})
app.listen(8080);