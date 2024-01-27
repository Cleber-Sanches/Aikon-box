function manipuladorErros(erro, req, res, next) {
  console.error(`Erro na solicitação: ${erro.message}`);
  res.status(500).send("Erro interno do servidor.");
}

module.exports = manipuladorErros;
