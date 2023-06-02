import { resolve } from "path";
import fs from "fs";
import { parentPort } from "worker_threads";

const pathFile = resolve("./", "log/big_data.txt");

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (!error) {
        resolve(data);
      }
      reject(error);
      return false;
    });
  });
}

let buffer;
try {
  buffer = await readFile(pathFile);
} catch (error) {
  console.log(error.message);
}

parentPort.postMessage(buffer);

parentPort.close();
