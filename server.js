//Path and Express require
const express = require("express");
//Database file
const notes = require("./db/db.json");



//Set up express
var app = express();
const PORT = 3000;


//Data parsing for the JSON data and HTML data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Separate JS file for the routes
//require("./routes/routes.js")

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

//Port listening
app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT);
})