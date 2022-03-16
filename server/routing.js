'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
const formPost = require('./formPost');
const formGet = require('./formGet')

router.post('/', (req, res) => {
    formPost(req, res, './db/data.json')
})
router.get('/', (req,res)=>{
    formGet(req, res, './db/data.json')
})

module.exports = router