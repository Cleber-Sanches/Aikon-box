const { carregarIcones, gerarIcones } = require("../services/icon.service");

const ICONES_POR_LINHA = 15;
const UM_ICONE = 48;

const requisitarIcones = async (req, res) => {
  try {
    const { query } = req;
    const parametroIcone = query.i || query.icones || query.icon;
    const iconesPorLinha =
      (query &&
        parseInt(
          query.iconesPorLinha || query.p || query.porLinha || query.porlinha,
          10
        )) ||
      ICONES_POR_LINHA;
    const tamanho =
      parseInt(query.t || query.tamanho || query.width, 10) || UM_ICONE;

    if (!parametroIcone) {
      return res
        .status(400)
        .json({ error: "Você não especificou nenhum ícone!" });
    }

    if (isNaN(iconesPorLinha) || iconesPorLinha < 1 || iconesPorLinha > 60) {
      return res
        .status(400)
        .json({ error: "Ícones por linha deve ser um número entre 1 e 60" });
    }

    const icones = await carregarIcones();

    const nomesIcones = parametroIcone.split(","); // Assumindo que os nomes dos ícones estão separados por vírgula
    const svg = gerarIcones(nomesIcones, iconesPorLinha, icones, tamanho);

    res.set("Content-Type", "image/svg+xml");
    res.send(svg);
  } catch (erro) {
    console.error(`Erro na solicitação: ${erro.message}`);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

module.exports = requisitarIcones;
