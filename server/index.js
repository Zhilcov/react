"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors')

mongoose.connect("mongodb://localhost/figuresReact", { useNewUrlParser: true });
app.use(cors())
app.use(bodyParser.json());

require('./router')(app);

server.listen(3003, () => {
    console.log('Server started on port 3003');
});
