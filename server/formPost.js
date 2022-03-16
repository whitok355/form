"use strict";

const fs = require('fs');

const formPost  = (req, res, path)=>{
    fs.readFile(path, "utf-8", (err, data)=>{
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text:err}))
        } else{
            fs.writeFile(path, JSON.stringify(req.body, null, 4), (err) =>{
                if(err){
                    res.sendStatus(404, JSON.stringify({result:0}))
                } else{
                    res.send(JSON.stringify({result: 1}))
                }
            })
        }
    })
}

module.exports = formPost