const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');
const app = express();

const path = require('path');


var pg = require('pg');
var conString = "postgres://cyszqvkycdmlnq:3aee60eed0a1c42d235337b01db884e48483e37a492b014ea3617902fc0b713a@ec2-54-163-234-20.compute-1.amazonaws.com:5432/d8ftjuju5muiek";

var client = new pg.Client(conString);
client.connect();


app.use(express.static(path.join(__dirname, '../')));

const indexPath = path.join(__dirname, '/../index.html');


app.get('/', function(req, res) {
    res.sendFile(indexPath);
});



// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
// app.use(express.static('../'));

app.use('/', express.static(path.join(__dirname, '../')));

router(app);

// Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);