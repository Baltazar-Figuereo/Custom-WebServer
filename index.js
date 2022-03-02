const http = require("http");

const proxy = {
    protocol: 'http',
    host: '185.46.212.88',
    port: 10560
};

const config = {
    proxy
};

const friends = [
    {
      id: 0,
      name: 'Nikola Tesla',
    },
    {
      id: 1,
      name: 'Sir Isaac Newton',
    },
    {
      id: 2,
      name: 'Albert Einstein',
    }
];

const PORT = 3000;

// both req and res are readable and writable streams
// resquest is an event emitter.

// this is similar to server.on('request') event emitter.
const server = http.createServer((req, res) => {
    const items = req.url.split("/")

    if(items[1] === "friends") {
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");

        if(items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]))
        }
        else {
            res.end(JSON.stringify(friends));
        }
    }
    else if (items[1] === "messages") {
        res.write("<html>");
        res.write("<body>");
        res.write("<span>What are you thought on Astronomy</span>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end();
    }
    
});

// 127.0.01 or localhost
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
