const http = require("http");

let url = "http://127.0.0.1:3000";

const request = http.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.on("data", (data) => {
      console.log(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "fani",
  lastName: "alfirdaus",
});
request.write(body);
request.end();
