const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: true, token: "5e1f$@re53dffsq#%e" });
});

app.listen(PORT, HOST, () => {
  console.log("App rodando na porta: " + PORT);
});
