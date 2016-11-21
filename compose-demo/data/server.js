var redis = require("redis"),
    client = redis.createClient({
      host: 'redis'
    });
 
client.on("error", function (err) {
    console.log("Error " + err);
});

const express = require('express')

const app = express()

//this route runs a piece of code that's already on the server
app.get('/set', function (req, res) {
  client.set("string key", req.query.name || 'anonymous', function(){
    res.writeHeader(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
      set: true
    }))
  })
})

app.get('/', function (req, res) {
  client.get("string key", function(err, data){
    res.writeHeader(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
      name: data
    }))
  })
})
app.listen(1337)