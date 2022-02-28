const http = require("http");

const proxy = {
    protocol: 'http',
    host: '185.46.212.88',
    port: 10560
}

const config = {
    proxy
}

const PORT = 3000;

// both req and res are readable and writable streams
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Context-Type': "application/json",
    });

    // need to close the writable stream at the end.
    // res.end("Hello! Sir Isaax Newton is your friend!");
    res.end(JSON.stringify({
            id: 1,
            name: "Sir Issac Newton"
    }));
});

// 127.0.01 or localhost
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
