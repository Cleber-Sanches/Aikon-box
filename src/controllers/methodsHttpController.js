const { resolve } = require('path');
const { generateOneSvg } = require('../utils/generateOneSvg');
const loadSvg = require('../utils/fileLoading');

const svgDirPath = resolve(__dirname, '../../assets/methods');

const getMethodsHttp = async (req, res) => {
  try {
    const { i } = req.query;

    if (!i) {
      return res.status(400).json({ error: 'Você não especificou nenhum ícone!' });
    }

    const nameMethods = i.split(',');

    const files = await loadSvg(svgDirPath);
    const svg = generateOneSvg(nameMethods, files);

    res.set('Content-Type', 'image/svg+xml');
    return res.send(svg);
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = getMethodsHttp;
