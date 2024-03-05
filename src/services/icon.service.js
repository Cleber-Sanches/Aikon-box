
const NOME_ICONE_ERRO = "Error404";

const gerarIcones = (nomesIcones, iconsPerLine, icones, tamanho) => {
  const ESCALA = tamanho / (300 - 44);

  const listaIcones = nomesIcones.map((nomeIcone) => icones[nomeIcone] || icones[NOME_ICONE_ERRO]);

  const largura = Math.min(iconsPerLine * 300, nomesIcones.length * 300) - 44;
  const altura = Math.ceil(listaIcones.length / iconsPerLine) * 300 - 44;

  const alturaRedimensionada = altura * ESCALA;
  const larguraRedimensionado = largura * ESCALA;

  return `
    <svg width="${larguraRedimensionado}" height="${alturaRedimensionada}" viewBox="0 0 ${largura} ${altura}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      ${listaIcones
      .map(
        (i, index) =>
          `
          <g transform="translate(${(index % iconsPerLine) * 300}, ${Math.floor(index / iconsPerLine) * 300 // espaços
          })">
            ${i}
          </g>
          `
      )
      .join(" ")}
    </svg>
  `;
};

module.exports = gerarIcones

