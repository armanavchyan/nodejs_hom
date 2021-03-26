const http = require('http');
const url = require('url');
const data = require('./users.json');
const server = http.createServer((req, res) => {
    const urlData = new URL(req.url, 'http://localhost:3001');
    const filter = urlData.searchParams.get('filter');
    if (filter) {
        for (const iter of data) {
            if (iter['fisrt_name'].includes(filter) || iter['last_name'].includes(filter)) {
                console.log(JSON.stringify(iter));
                
                res.end('ok');

            } else {
                res.end('not found');
            }
        }
    }else{
        res.end('filter is false');
    }

});
server.listen(3001);

    