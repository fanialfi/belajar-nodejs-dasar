function samplePromise() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve("fani");
    } else {
      reject(false);
    }
  });
}

// jika tidak menggunakan modules
async function run() {
  const name = await samplePromise();
  console.log(name);
}
run();

// jika tidak ditandai async
// const name = await samplePromise(); // SyntaxError: await is only valid in async functions and the top level bodies of modules
// console.log(name);
