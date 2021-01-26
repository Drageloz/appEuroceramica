const { RequiredValidator } = require("@angular/forms");

const express = require('express');

const app = express();

app.use(express.static('./views'));

app.get('/*', (req,res) =>
    res.sendFile('index.html', {root: './src/'}),
);

app.listen(process.env.PORT || 8080);