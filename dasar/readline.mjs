import * as readline from "node:readline/promises";
import process from "node:process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.on("close", () => {
  console.log(`
terima kasih telah berpartisipasi !!!`);
});

try {
  const nama = await input.question("siapa nama anda ? ");
  const umur = await input.question("berapa umur anda ? ");

  console.log(`nama saya adalah ${nama} saya berumur ${umur} tahun`);

  // menutup question
  input.close();
  // process.exit();
} catch (error) {
  console.error(error.message);
}
