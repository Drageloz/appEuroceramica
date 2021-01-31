const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, '/dist/views')));

app.get('/*', (req,res) =>
    res.sendFile(__dirname + '/dist/views/index.html'),
);

app.listen(process.env.PORT || 8080, function(){
    console.log('App started');
});