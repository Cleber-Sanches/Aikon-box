const { readdir, readFile } = require("fs/promises");
const { join, resolve } = require("path");

const CAMINHO_DIRETORIO_ICONES = resolve(__dirname, "../../icons");
const NOME_ICONE_ERRO = "Error404";

const carregarIcones = async () => {
  const icones = {};
  try {
    const arquivosIcones = await readdir(CAMINHO_DIRETORIO_ICONES);

    for (const arquivo of arquivosIcones) {
      const nomeIcone = arquivo.replace(/\.svg$/, "");
      const caminhoIcone = join(CAMINHO_DIRETORIO_ICONES, arquivo);

      const dados = await readFile(caminhoIcone, "utf8");
      icones[nomeIcone] = dados;
    }
  } catch (erro) {
    console.error(`Erro ao carregar ícones: ${erro.message}`);
    throw erro;
  }

  return icones;
};

const gerarIcones = (nomesIcones, iconesPorLinha, icones, tamanho) => {
  const ESCALA = tamanho / (300 - 44);

  const listaIcones = nomesIcones.map((nomeIcone) => {
    return icones[nomeIcone] || icones[NOME_ICONE_ERRO];
  });

  const largura = Math.min(iconesPorLinha * 300, nomesIcones.length * 300) - 44;
  const altura = Math.ceil(listaIcones.length / iconesPorLinha) * 300 - 44;

  const alturaRedimensionada = altura * ESCALA;
  const larguraRedimensionado = largura * ESCALA;

  return `
    <svg width="${larguraRedimensionado}" height="${alturaRedimensionada}" viewBox="0 0 ${largura} ${altura}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      ${listaIcones
        .map(
          (i, index) =>
            `
          <g transform="translate(${(index % iconesPorLinha) * 300}, ${
              Math.floor(index / iconesPorLinha) * 300 // espaços
            })">
            ${i}
          </g>
          `
        )
        .join(" ")}
    </svg>
  `;
};

module.exports = {
  carregarIcones,
  gerarIcones,
};
