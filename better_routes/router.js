"use strict";

const httpStatus = require("http-status-codes"),
htmlContentType = {
    "Content-Type":"text/html"
},
routes = {
    "GRT":{
        "/info":(teq,res)=>{
            res.writeHead(httpStatus.OK, {
                "Content-Type":"text/plain"
            })
            res.end("Welkome to the Info page!")
        }
    },
    'POST':{}
};

exports.handle = (req,res) =>{
    try{
        if(routs[req.method][req.url]){
            routes[req.method][req.url](req, res);
        }
        else{
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No such fole existes</h1>");
        }
    }
    catch (ex) {
        console.log("error: " +ex);
    }
};
    exports.get = (url, action) =>{
        routes["GET"][url] = action;
    };
    exports.post = (url, action) =>{
        routes["POST"][url] = action;
    }