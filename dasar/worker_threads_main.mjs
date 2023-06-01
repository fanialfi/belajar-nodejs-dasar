import { threadId, Worker } from "worker_threads";
import path from "path";

const pathWorker = path.resolve("./", "dasar/worker.mjs");

const worker1 = new Worker(pathWorker);
const worker2 = new Worker(pathWorker);

worker1.on("message", (message) => {
  console.log(`Thread-${threadId} receive data from worker 1 : ${message}`);
});

worker2.on("message", (message) => {
  console.log(`Thread-${threadId} receive data from worker 2 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
