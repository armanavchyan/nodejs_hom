// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const server = http.createServer((req, res) => {
//     const data = url.parse(req.url, true);
//     if (data.query.file === 'sunny') {
//         fs.createReadStream('sunny.txt', 'utf-8').pipe(res);
   
//     } else {
//         res.statusCode = 404;
//         res.end('Not found'); 
//     }

// })
// server.listen(3000);