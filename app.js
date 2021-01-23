const express = require('express');
const https = require('https');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/mailme", function(req, res) {
    res.sendFile(__dirname + "/mail.html");
});

app.listen(PORT, function() {
    console.log("Server is up and running in port: " + `${ PORT }`);
});