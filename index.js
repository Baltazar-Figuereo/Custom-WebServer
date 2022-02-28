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
// resquest is an event emitter.

// this is similar to server.on('request') event emitter.
const server = http.createServer((req, res) => {
    if(req.url === "/friends") {
        /*
        res.writeHead(200, {
            'Content-Type': "application/json",
        });
        */

        res.statusCode = 200
        res.setHeader("Content-Type","application/json")
    
        // need to close the writable stream at the end.
        // res.end("Hello! Sir Isaax Newton is your friend!");
        res.end(JSON.stringify({
                id: 1,
                name: "Sir Issac Newton"
        }));
    }
    else if (req.url === "/messages") {
        res.write("<html></html>")
        res.write("<body>")
        res.write("<span>What are you thought on Astronomy</span>")
        res.write("</body>")
        res.write("</html>")
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end()
    }
    
});

// 127.0.01 or localhost
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
