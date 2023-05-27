import path from "node:path";
// const path = require("node:path");

const file = "/home/fani/dev/note/README.md";

console.log(`nama file : ${path.basename(file)}`);
console.log(path.delimiter);
console.log(`direktori name : ${path.dirname(file)}`);
console.log(`ekstension name : ${path.extname(file)}`);
console.log(path.isAbsolute(file));
console.log(path.resolve("./", "../log/note.txt"));
