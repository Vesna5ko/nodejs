"use strict";
const port = 3000,
http = require ("http"),
httpStatusCodes = require("http-status-codes"),
router = require("./router"),
fs = require("fs"),
plainTextContentType = {
    "COntent-Type":  "text/plain"
},
htmlContentType = {
    "Content-Type" : "text/html"
},

custonReadFile = (file, res)=>
{
    fs.readFile(`./${file}`,(errors, data)=>{
        if(errors){
            console.log("Error readin the file...");
        }
        res.end(data);
    });
};

router.get("/", (req,res) =>{
    res.writeHead(httpStatusCodes.ok, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req,res)=>{
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    costomReadFile("view/index.html", res);
});
router.post("/", (req,res) =>{
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number:${port}`);