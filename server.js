import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;

  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>Home Page!!<h1/>`); // manually need to end s
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>About Page!!<h1/>`); // manually need to end s
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>Not Found!!<h1/>`); // manually need to end s
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`server error`); // manually need to end s
  }

  // res.end('Hello world'); // manually need to end s
});

server.listen(8000, () => {
  console.log("Server running on port: ", PORT);
});
