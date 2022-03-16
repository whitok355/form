"use strict";

const express = require('express');
const fs = require('fs');
const app = express();
const routing = require('./routing')

app.use(express.json());
app.use('/', express.static('../dist'))
app.use('/form', routing)

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`The serve listen port ${port}...`))