const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta: ${port}`);
});
