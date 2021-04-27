const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => console.log("The server is running at PORT 4000"));