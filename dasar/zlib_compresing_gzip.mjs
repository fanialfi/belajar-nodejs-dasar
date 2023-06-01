// import fsPromises from "node:fs/promises";
import { createWriteStream, createReadStream } from "node:fs";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

// mengecek apakah terdapat folder log, jika tidak ada maka buat dulu folder log
if (!fs.existsSync("log")) {
  fs.mkdirSync("log");
}

const pathBigData = path.resolve("./", "log/big_data.txt");
const resultFilePath = path.resolve("./", "log/big_data.txt.gzip");

const sourceBigData = await createReadStream(pathBigData); // sumber dari data dan, hasilnya dalam bentuk buffer

const resultBigDataCompress = await createWriteStream(resultFilePath); // lokasi file compress

// membuat object gzip
const gzip = zlib.createGzip({
  level: 9, // membuat level kompresi
});

sourceBigData
  .on("close", () => {
    console.log(`finished reading data`);
  })
  .pipe(gzip)
  .on("error", () => {
    console.log(`error compressing data`);
  })
  .on("end", () => {
    console.log(`finished compressing data`);
  })
  .pipe(resultBigDataCompress)
  .on("finish", () => {
    console.log(`finished writing data compress to file`);
  });

{
  // penggunaan sederhana gzip compressing

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

  const sourcePath = path.resolve("./", "dasar/zlib_compresing_gzip.mjs");
  const resultPath = path.resolve("./", "log/zlib_compresing_gzip.mjs.gzip");

  try {
    const source = await readingData(sourcePath); // mengembalikan dalam bentuk buffer
    const result = zlib.gzipSync(source);

    await writingData(resultPath, result);
  } catch (error) {
    console.log(`error with error : ${error.message}`);
  }
}
