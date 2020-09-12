const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    let html = fs.readFileSync("index.html", { encoding: "utf-8" });
    res.writeHead(200);
    res.end(html);
  })
  .listen(3000);
