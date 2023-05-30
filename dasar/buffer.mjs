import fs from "node:fs/promises";
import { resolve } from "node:path";
import { Buffer } from "node:buffer";

// membuat buffer
const noteTxtPath = resolve("./", "log/note.txt");

const noteTxt = await fs.readFile(noteTxtPath);

const buffer = Buffer.from(noteTxt, "utf-8");

// merubah encoding menggunakan buffer
const bufbase64 = buffer.toString("base64");
const bufHex = buffer.toString("hex");
const bufUtf8 = buffer.toString(); // jika tidak diberi parameter, maka encoding default adalah utf-8
const bufJson = buffer.toJSON();

console.log([bufbase64, bufHex, bufUtf8]);

console.log(buffer);
console.log(bufJson); // akan menggunakan object dengan properti type : "Buffer", dan data yang berbentuk Buffer

{
  const buffer = Buffer.alloc(1024); // mengalokasikan jumplah buffer yang dapat ditampung sebesar 1024 bit

  buffer.write("hai nama saya fani salam kenal yaa", 0);
  console.log(buffer.toString());
  console.table(buffer);

  buffer.write(
    "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  );
  console.log(buffer.toString());
  console.table(buffer);
}
