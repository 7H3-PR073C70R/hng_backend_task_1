const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8000;
const router = express.Router();
const bodyParser = require('body-parser');
const getOperationType = require('./helper').getOperationType;
const operationType = require('./helper').operationType;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.use('/', router);

router.route('/').get(function (req, res) {
    res.status(200).json({ slackUsername: "toxic-bishop", backend: true, age: 24, bio: "Aspiring full stack mobile dev but for now I am a highly motivated Mobile Application Developer with extensive knowledge and hands-on experience working on Smartphone Applications using flutter." });
}).post(function (req, res) {
    try {
        const operation = req.body.operation_type;
        const num1 = parseInt(req.body.x);
        const num2 = parseInt(req.body.y);
        let result = 0;
        let operationToBePerformed = getOperationType(operation);

        if (operationToBePerformed === operationType.add) {
            result = num1 + num2;
        } else if (operationToBePerformed === operationType.subtract) {
            result = num1 - num2;
        } else if (operationToBePerformed === operationType.multiply) {
            result = num1 * num2;
        }
        res.status(200).json({ "slackUsername": "toxic-bishop", "operation_type": operationToBePerformed, "result": result });
    } catch (error) {
        res.status(500).json({ "slackUsername": "toxic-bishop", "error": error });
    };
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
