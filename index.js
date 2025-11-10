const express = require("express");

const app = express();
const port = 3000;

// handle get request
app.get("/", (request, response) => {
  // send back a response in plain text
  response.send("response for GET request");
});

// start the server
app.listen(3000, () =>
  console.log(`server start at http://localhost:${port}/`)
);
