import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
  console.log(`Primary : ${process.pid}`);
  // jalankan worker
  for (let index = 0; index < os.cpus().length; index++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker-${worker.id} is exit`);
    cluster.fork();
  });
}

const port = 3000;
if (cluster.isWorker) {
  console.log(`Worker : ${process.pid}`);

  const server = http.createServer((request, response) => {
    response.write(`<h1>Response from : ${process.pid}</h1>\n`);
    response.end();

    // menutup worker
    process.exit();
  });

  server.listen(port);
}
