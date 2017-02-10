const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');
const app = express();

const db = require('./models');

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

db.sequelize.sync().then(function() {
  http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});
