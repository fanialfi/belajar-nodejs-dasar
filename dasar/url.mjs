import { URL } from "url";

const fanialfi = new URL(
  "https://www.fanialfi.space:8080/tutorial?kelas=nodejs"
);

console.log(`
before
`);

console.log(`toString : ${fanialfi.toString()}`);
console.log(`href : ${fanialfi.href}`);
console.log(`protocol ${fanialfi.protocol}`);
console.log(`host : ${fanialfi.host}`);
console.log(`pathname : ${fanialfi.pathname}`);
console.log(`searchParams : ${fanialfi.searchParams}`);
console.log(`port : ${fanialfi.port}`);
console.log(`origin : ${fanialfi.origin}`);

console.log(`
after
`);

fanialfi.protocol = "http";
fanialfi.port = 443;
fanialfi.searchParams.append("status", "premium");
fanialfi.pathname = "/belajar";

console.log(`toString : ${fanialfi.toString()}`);
console.log(`href : ${fanialfi.href}`);
console.log(`protocol ${fanialfi.protocol}`);
console.log(`host : ${fanialfi.host}`);
console.log(`pathname : ${fanialfi.pathname}`);
console.log(`searchParams : ${fanialfi.searchParams}`);
console.log(`port : ${fanialfi.port}`);
console.log(`origin : ${fanialfi.origin}`);
