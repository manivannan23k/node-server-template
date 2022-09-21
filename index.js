const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8081

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./routes/data.routes')(app)

app.listen(port, () => {
    console.log(`Server started at ${port}`)
});