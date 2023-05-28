import * as readline from "node:readline";
import process from "node:process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

try {
  input.question("siapa nama anda ? ", (nama) => {
    input.question("berapa umur anda ? ", (umur) => {
      input.question("apakah kamu sudah bekerja ? ", (status) => {
        console.log(
          `hai nama saya ${nama} saya saat ini berusia ${umur} tahun, dan status saya saat ini ${status} bekerja`
        );
        input.close();
      });
    });
  });
} catch (error) {
  console.error(error.message);
}
