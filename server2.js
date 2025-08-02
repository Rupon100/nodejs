import { createServer } from "http";

const PORT = 3000;

const users = [
  { id: 1, name: "Rupon Mia" },
  { id: 2, name: "Fardiya" },
  { id: 3, name: "Muna" },
];

//logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const server = createServer((req, res) => {
  // logger
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else if (req.url.match(/^\/api\/users\/\d+$/) && req.method === "GET") {
      const id = req.url.split("/")[3];
      res.setHeader("Content-Type", "application/json");

      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "User not found" }));
      }
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Cannot find anything!!" }));
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
