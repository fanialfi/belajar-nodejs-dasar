import { report } from "node:process";
import { resolve } from "node:path";

report.reportOnFatalError = true;
report.reportOnUncaughtException = true;
report.reportOnSignal = true;
report.filename = resolve("./", "log/report.json");

function sampleError() {
  throw new Error("Ups terjadi error");
}

sampleError();
