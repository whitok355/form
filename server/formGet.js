"use strict";

const fs = require('fs');

const formGet = (req, res, path) => {
    fs.readFile(path, 'utf-8', (err,data)=>{
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text:err}))
        } else{
            res.send(data)
        }
    })
}

module.exports = formGet