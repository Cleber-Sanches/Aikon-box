const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/icons", (req, res) => {
  console.log("Hello world!");
});

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta: ${port}`);
});
