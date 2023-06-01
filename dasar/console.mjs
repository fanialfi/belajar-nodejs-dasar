import { Console } from "node:console";
import fs from "fs";
import { resolve } from "path";

// mengecek folder log
if (!fs.existsSync("log")) {
  fs.mkdirSync("log");
}

const pathLog = resolve("./", "log/logging.log");

const file = fs.createWriteStream(pathLog);

const log = new Console({
  stdout: file,
  stderr: file,
});

const data = {
  nama: {
    firstName: "fani",
    lastName: "alfirdaus",
  },
  alamat: {
    negara: "Indonesia",
    provinsi: "Java Tengah",
    kabupaten: "Karanganyar",
    kecamatan: "Matesih",
    desa: "Koripan",
    dusun: "Dukuh",
    rt: 1,
    rw: 9,
  },
  status: "Mahasiswa",
};

log.log("hai");
log.table(data);
