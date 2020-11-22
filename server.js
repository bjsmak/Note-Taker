//Path and Express require
const express = require("express");
//Database file




//Set up express
var app = express();
const PORT = process.env.PORT || 3000;


//Data parsing for the JSON data and HTML data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"))



require("./routes/apiroutes.js")(app)
//Separate JS file for the routes
require("./routes/routes.js")(app)




//Port listening
app.listen(PORT, () => {
    console.log('Server is listening on PORT ' + PORT);
})