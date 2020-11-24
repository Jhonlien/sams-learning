const express = require("express"), 
        app = express(), 
        port = 3000;

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.send(JSON.stringify("sams cool"));
})

app.listen(port);