const http = require("http");

const data = JSON.stringify({
  message: "Hallo Http CLient",
  data: {
    firstName: "fani",
    lastName: "alfirdaus",
  },
});
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  request.on("data", (buffer) => {
    response.write(buffer.toString());
    console.log(buffer.toString());
  });

  response.write(data);
  request.on("finish", () => {
    response.end();
  });
  request.on("close", () => {
    response.end();
  });
});

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`server listening on port : ${port}`);
});
