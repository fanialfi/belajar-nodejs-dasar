import util from "util";

let data = "hai";
let dataJson = {
  nama: "fani alfirdaus",
  alamat: "Indonesia",
  umur: 17,
};

console.log(`hai ${data}`);
console.log(util.format("hai %s", data));

console.log(`hai ${JSON.stringify(dataJson)}`);
console.log("hai %j", dataJson);
