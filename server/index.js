const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');
const app = express();

const path = require('path');

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