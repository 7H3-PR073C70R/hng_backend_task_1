const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get('/', function (req, res) {
    res.status(200).send( { "slackUsername": "toxic-bishop", "backend": true, "age": 27, "bio": "Aspiring full stack mobile dev but for now I am a highly motivated Mobile Application Developer with extensive knowledge and hands-on experience working on Smartphone Applications using flutter." });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
