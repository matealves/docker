const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ status: true, token: "5e1f$@re536dffsq#%e" });
});

app.listen(port, () => {
  console.log("App rodando na porta: " + port);
});
