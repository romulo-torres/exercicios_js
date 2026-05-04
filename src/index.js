const http = require('http');
const fs = require('fs')

const link = require('./links.js')

const dotenv = require('dotenv')
dotenv.config({
  override: true,
  path: `.env.${process.env.NODE_ENV}`
});

const dir = process.argv[2];
const port = process.env.PORT ?? 5555

const server = http.createServer(function(req,res){
    fs.readdir(dir, (err, arquivos) => {
        if (err) {
            res.writeHead(500, {"content-type":"text/plain"});
            console.log(err)
            res.end()
        }

        res.writeHead(200, {"content-type":"text/html;charset=utf-8"});
        arquivos.forEach((f)=>{
            res.write(link.createLink(f))
        })
        return res.end();
        
    })
});


server.listen(port);