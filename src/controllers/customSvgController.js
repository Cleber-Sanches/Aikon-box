const { resolve } = require('path');
const loadSvg = require('../utils/fileLoading');

const modifySvg = (svgContent, text, color) => {
  try {
    if (!text || typeof text !== 'string' || text.trim() === '') {
      throw new Error('Texto inválido fornecido.');
    }

    const hexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!hexColorRegex.test(color)) {
      throw new Error('Cor inválida fornecida.');
    }

    const fontSize = 23;
    const baseTextLength = text.length * 13;
    const isUpperCase = /^[A-Z]+$/.test(text);
    const textLength = isUpperCase ? text.length * 15 : baseTextLength;
    const totalWidth = textLength + 40;
    const svgHeight = 32;

    const modifiedSvg = svgContent
      .replace(/height=".*?"/g, `height="${svgHeight}"`)
      .replace(/<text.*?x="50%".*?>.*?<\/text>/, `<text text-anchor="middle" dominant-baseline="central" x="50%" y="${svgHeight / 2}" font-size="${fontSize}" textLength="${textLength}" font-family="Arial" font-weight="600" fill="#${color}">${text} </text>`)
      .replace(/width=".*?"/g, `width="${totalWidth}"`)
      .replace(/viewBox=".*?"/, `viewBox="0 0 ${totalWidth} ${svgHeight}"`)
      .replace(/fill="#[0-9A-Fa-f]{6}"/g, `fill="#${color}"`);

    return modifiedSvg;
  } catch (error) {
    throw new Error(`Erro ao modificar o SVG: ${error.message}`);
  }
};

const getSvgWithModifiedText = async (req, res) => {
  try {
    const { text, color } = req.query;
    const colorDefault = color || '6C7688';

    const svgDirPath = resolve(__dirname, '../../assets/custom');
    const svgs = await loadSvg(svgDirPath);

    const svgFileName = 'customSvg';
    const svgContent = svgs[svgFileName];

    if (!svgContent) {
      return res.status(404).json({ error: 'Arquivo SVG não encontrado!' });
    }

    const modifiedSvg = modifySvg(svgContent, text, colorDefault);

    res.set('Content-Type', 'image/svg+xml');
    return res.send(modifiedSvg);
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getSvgWithModifiedText;
