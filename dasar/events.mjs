import { EventEmitter } from "node:events";

const emiter = new EventEmitter();

// membuat events / membuat listener
// jika event listener terdapat dua nama yang sama, maka keduanya akan terpanggil / ter triger
// cocok ketika akan membuat event manual
emiter.on("sayHello", (name) => {
  console.log(`Hallo ${name}`);
});

emiter.addListener("sayHello", (name) => {
  console.log(`Hai ${name} apa kabar`);
});

// mentriger events
emiter.emit("sayHello", "fanialfi");
