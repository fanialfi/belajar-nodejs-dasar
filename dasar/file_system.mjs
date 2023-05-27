import fs from "node:fs/promises";
import path from "node:path";

const pathFile = path.resolve("./", "log/note.txt");
const destinationFile = path.resolve("./", "log/file_baru.txt");

// read file
try {
  const buffers = await fs.readFile(pathFile);
  console.log(buffers.toString());
} catch (error) {
  console.log(`Error : ${error.message}`);
}
// write file

try {
  const data = "fanialfi\n";
  const promise = await fs.writeFile(destinationFile, data, "utf8");
} catch (error) {
  console.log(`Error : ${error.message}`);
}
