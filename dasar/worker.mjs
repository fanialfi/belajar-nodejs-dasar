import { parentPort, threadId } from "worker_threads";

parentPort.on("message", (message) => {
  for (let i = 0; i < message; i++) {
    console.log(`thread-${threadId} send message : ${i}`);
    parentPort.postMessage(i);
  }
  // menutup worker
  parentPort.close();
});
