//Libraries
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//server configuration
var basePath = '/PAULINE';
var port = 6200;

// Connection to DB
mongoose.connect('mongodb://mongodb')
    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

// Routes and Backend Funcioncalities
var realEstateRoutes = require('./src/routes/realEstatetRoutes');

// App Instance
var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, realEstateRoutes);

// Execute App
app.listen(port, () => {
  console.log('RealEstate Backend running on Port: ',port);
});