const { resolve } = require('path');
const { generateStatusCode } = require('../services/statusCode.service');
const loadSvg = require('../utils/fileLoading');

const svgDirPath = resolve(__dirname, '../../assets/statusCode');

const getStatusCode = async (req, res) => {
  try {
    const { statuscode } = req.query;

    if (!statuscode) {
      return res.status(400).json({ error: 'Você não especificou nenhum ícone!' });
    }

    let nameStatuCode = statuscode.split(',');

    if (nameStatuCode.length > 1) {
      nameStatuCode = ['paramsError'];
    }

    const files = await loadSvg(svgDirPath);
    const svg = generateStatusCode(nameStatuCode, files);

    res.set('Content-Type', 'image/svg+xml');
    return res.send(svg);
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = getStatusCode;
