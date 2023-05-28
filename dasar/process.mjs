import process from "node:process";
import os from "node:os";

// mentriger ketika process nodejs keluar
process.on("exit", (exitCode) => {
  console.log(`NodeJS telah keluar dengan exitCode : ${exitCode}`);
  if (process.exitCode === 100) {
    console.log(`exitCode : ${process.exitCode}`); // mereferensi ke process.exitCode()
  }
});

console.log(process.argv); // mengembalikan array yang berisi argumen ketika process nodejs dijalankan

process.env.userName = "fanialfi"; // memodifikasi environment, tapi tidak akan terlihat diluar process nodejs
/*
 * ketika dipanggil dengan printah node fileJavascript.mjs && echo $userName, perintah ke dua tidak akan mengeluarkan hasil
 */

console.log(process.env); // mengembalikan object yang mengandung user environment
console.log(process.release);
console.log(`uptime : ${process.uptime()} s`);
console.table(process.versions);

if (process.env.NODE_ENV == "saichiopy") {
  process.exit(100);
}

console.log(`pesan terakhir hello ${os.hostname}`);
