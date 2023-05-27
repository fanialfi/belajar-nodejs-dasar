import os from "node:os";

console.log(os.arch()); // digunakan untuk mendapatkan architecture yang digunakan.
console.log(os.platform()); // mengembalikan platform yang digunakan
console.log(os.cpus());
console.log(os.freemem()); // mengembalikan freemem yang tersedia dalam bentuk byte
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.machine());
console.log(os.networkInterfaces());
console.log(os.release());
console.log(os.type());
console.log(os.uptime());
console.log(os.version());
