const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "GET"
      )
      return res.status(200).json({})
    }
    next()
  }).get('/', function (req, res) {
    res.status(200).send( { "slackUsername": "toxic-bishop", "backend": true, "age": 24, "bio": "Aspiring full stack mobile dev but for now I am a highly motivated Mobile Application Developer with extensive knowledge and hands-on experience working on Smartphone Applications using flutter." });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
