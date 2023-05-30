import net from "net";

const port = 3000;
const host = "127.0.0.1";

const server = net.createServer((client) => {
  console.log(`Client Connected\n`);

  client.on("data", (dataBuffer) => {
    console.log(
      `on time : ${new Date().toLocaleString(
        `id-ID`
      )} receive data from client : ${dataBuffer.toString()}`
    );

    client.write(`Hello ${dataBuffer.toString()}\r\n`);
  });

  client.on("end", (data) => {
    console.log("Client Exited\r\n");
  });
});

server.listen(port, host, () => {
  console.log(`Listening on port : ${port}`);
});
