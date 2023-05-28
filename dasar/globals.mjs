import { EventEmitter } from "node:events";
import fs from "node:fs/promises";
import { resolve } from "node:path";

const noteTxt = resolve("./", "log/note.txt");
const emiter = new EventEmitter();

// membuat listener
emiter.on("bacaFile", (data) => {
  try {
    console.log(data);
  } catch (error) {
    console.error(Error(`gagal menampilkan hasil`));
  }
});

try {
  const buffers = await fs.readFile(noteTxt);

  // global method
  setTimeout(() => {
    try {
      // mentriger events
      emiter.emit("bacaFile", buffers.toString());
      err;
    } catch (error) {
      console.error(error.message);
    }
  }, 2000);
} catch (error) {
  console.log(`error : ${error.message}`);
}
