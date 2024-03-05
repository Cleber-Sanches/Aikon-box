const { resolve } = require('path');
const { generateOneSvg } = require('../utils/generateOneSvg');
const loadSvg = require('../utils/fileLoading');

const svgDirPath = resolve(__dirname, '../../assets/statusCode');

const getStatusCode = async (req, res) => {
  try {
    const { i } = req.query;

    if (!i) {
      return res.status(400).json({ error: 'Você não especificou nenhum ícone!' });
    }

    const nameStatuCode = i.split(',');

    const files = await loadSvg(svgDirPath);
    const svg = generateOneSvg(nameStatuCode, files);

    res.set('Content-Type', 'image/svg+xml');
    return res.send(svg);
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = getStatusCode;
