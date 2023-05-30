import timers from "timers/promises";

// set timeout
console.log(new Date());
const nama = await timers.setTimeout(1000, "fani");
console.log(new Date());
console.log(nama);

// set interval
const interval = 100;
for await (const startTime of timers.setInterval(interval, new Date())) {
  const now = new Date();
  console.log(+now);
  if (now - startTime > 1000) break;
}
console.log(new Date());
