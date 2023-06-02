import zlib from "zlib";
import { parentPort } from "worker_threads";

const options = {
  level: 9,
};

parentPort.on("message", (message) => {
  const gz = zlib.gzipSync(message, options);
  parentPort.postMessage(gz);
  parentPort.close();
});
