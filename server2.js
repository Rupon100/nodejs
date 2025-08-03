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

// json middleware
const jasonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// route handeler for /api/users
const getUsers = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// route handeler for GET /api/users/:id
const getUserByIdHandeler = (req, res) => {
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
};

// route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  //listen for the data // this is hwo we get data from the users using nodejs
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUsers = JSON.parse(body);
    users.push(newUsers);
    res.statusCode = 201;
    res.write(JSON.stringify(newUsers));
    res.end();
  })
}

// not found handeler
const notFound = (req, res) => {
  res.statusCode = 404;
      res.write(JSON.stringify({ message: "Cannot find anything!!" }));
      res.end();
}

const server = createServer((req, res) => {
  // logger
  logger(req, res, () => {
    jasonMiddleware(req, res, () => {
      if(req.url === '/api/users' && req.method === "GET"){
        getUsers(req, res);
      }else if(req.url.match(/\/api\/users\/([0-3]+)/) && req.method === "GET"){
        getUserByIdHandeler(req, res);
      }else if(req.url === '/api/users' && req.method === "POST"){
        createUserHandler(req, res);
      }else{
        notFound(req, res);
            }
    })
  })
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
