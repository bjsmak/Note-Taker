const fs = require("fs");

//Routes
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})