import fs from "node:fs";
import path from "node:path";

try {
  const pathNoteTxt = path.resolve("./", "log/note.txt");
  const writeStream = path.resolve("./", "log/write_stream.txt");
  const bigDataPath = path.resolve("./", "log/big_data.txt");

  // membuat file dalam bentuk stream
  const writer = fs.createWriteStream(writeStream);
  const noteTxt = await fs.promises.readFile(pathNoteTxt);

  await writer.write("fani\n");
  await writer.write(noteTxt); // method write() chunk argument harus berisi string, buffer, atau Uint8Array

  const reader = fs.createReadStream(bigDataPath, {
    highWaterMark: 128, // akan membaca perbagian hanya dibatasi sampai 128 byte
  });

  // event ketika sedang membaca berkas
  reader.on("readable", () => {
    console.log(reader.read());
    // writer.write(reader.read());
    writer.close();
  });
} catch (error) {
  console.log(error);
}
