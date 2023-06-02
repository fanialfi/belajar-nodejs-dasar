import { Worker } from "worker_threads";
import { resolve } from "path";
// import { Buffer } from "buffer";
import { createWriteStream } from "fs";

const readFilePath = resolve("./", "worker_compress/read_file.mjs");
const compresFilePath = resolve("./", "worker_compress/compress_file.mjs");
const writeFilePath = resolve("./", "log/big_data.txt.gz");

const readWorker = new Worker(readFilePath);
const compressWorker = new Worker(compresFilePath);
const writer = createWriteStream(writeFilePath);

readWorker.on("message", (message) => {
  const buffer = Buffer.from(message);

  compressWorker.postMessage(buffer);
});

compressWorker.on("message", (message) => {
  const buffer = Buffer.from(message);

  writer.write(buffer);
});
