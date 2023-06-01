import { createWriteStream, createReadStream } from "node:fs";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

if (!fs.existsSync("log")) {
  fs.mkdirSync("log");
}

try {
  const sourcePath = path.resolve("./", "log/big_data.txt.gzip");
  const sourceData = await createReadStream(sourcePath);

  const gunzip = zlib.createGunzip({
    level: 9,
  });

  const resultPath = path.resolve("./", "log/big_data.txt");
  const resultData = await createWriteStream(resultPath);

  sourceData.pipe(gunzip).pipe(resultData);
} catch (error) {
  console.log(error.message);
} finally {
  console.log(`finished decompresing file`);
}

{
  // penggunaan sederhana gzip decompresing

  // fungsi untuk membaca data
  async function readingData(data) {
    return new Promise((resolve, reject) => {
      fs.readFile(data, (error, data) => {
        if (error) {
          console.log(`error reading data with error : ${error.message}`);
          reject(Error("error reading data"));
        }
        resolve(data);
      });
    });
  }

  // fungsi untuk menulis data
  async function writingData(destinationFile, dataBuffer) {
    return new Promise((resolve, reject) => {
      fs.writeFile(destinationFile, dataBuffer, (error, notError) => {
        if (error) {
          reject(Error(`Error writing with error : ${error.message}`));
        }
        resolve(notError);
      });
    });
  }

  try {
    const sourcePath = path.resolve("./", "log/zlib_compresing_gzip.mjs.gzip");
    const resultPath = path.resolve("./", "log/zlib_compresing_gzip.mjs");

    const source = await readingData(sourcePath); // dalam bentuk buffer compres

    const result = zlib.unzipSync(source); // dalam bentuk buffer decompres

    await writingData(resultPath, result);
  } catch (error) {
    console.log(error.message);
  }
}
