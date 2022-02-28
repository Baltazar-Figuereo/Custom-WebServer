const http = require("http");

const proxy = {
    protocol: 'http',
    host: '185.46.212.88',
    port: 10560
}

const config = {
    proxy
}


// both req and res are streams
const server = http.createServer((req, res) => {

});

