function samplePromise() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve("fani");
    } else {
      reject(false);
    }
  });
}

// jika menggunakan modules
const name = await samplePromise();
console.log(name);
