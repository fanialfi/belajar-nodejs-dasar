import net from "net";

const port = 3000;
const host = "127.0.0.1";
const data = process.argv[2] || "saichiopy";

const client = net.createConnection(port, host, () => {
  console.log(`Server Connected\n`);

  client.on("data", (dataBuffer) => {
    console.log(
      `on time : ${new Date().toLocaleString(
        `id-ID`
      )} receive data from server : ${dataBuffer.toString()}`
    );
  });
});

setInterval(() => {
  client.write(`${data}\r\n`);
}, 1000);
