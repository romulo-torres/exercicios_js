const http = require('http');
const fs = require('fs')

const server = http.createServer(function(req,res){
    let dir = process.argv.at(2);
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(dir){
        let arquivos = fs.readdir(dir,(err, arquivos) => {
            if (err) {
                res.write("Erro ao ler diretório");
                return res.end();
            }
        arquivos.forEach(element => {
            res.write(element + "<br>")
        });
        res.end();
        });
    }
});


server.listen(3333);