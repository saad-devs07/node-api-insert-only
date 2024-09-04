const users = require('./users');
const dboperations = require('./dboperations');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log("MIDDLEWARE");
    next();
})

var port = process.env.PORT || 5090;
app.listen(port);
console.log("Server is listening at PORT: " + port);

router.route('/addUsers').post((request, response) => {
    let user = {...request.body};
    dboperations.insertUsers(user).then(result => {
        response.status(201).json("Data Inserted Successfully!" + result);
    })
})
