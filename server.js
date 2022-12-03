const express = require("express");

const app = express()

app.get("/clients", function(req, res){});
app.get("/clients/:id", function(req, res){});
app.post("/clients", function(req, res){});
app.put("/clients/:id", function(req, res){});
app.delete("/clients/:id", function(req, res){});

app.listen(3000, function(){
    console.log("Server is running")
})