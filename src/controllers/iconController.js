const { resolve } = require('path');
const generateIcons = require('../services/icon.service');
const loadSvg = require('../utils/fileLoading');

const iconsPerLineDefault = 15;
const sizeDefault = 48;
const iconsDirectoryPath = resolve(__dirname, '../../assets/icons');

const getIcons = async (req, res) => {
  try {
    const { query } = req;
    const iconName = query.i || query.icons;
    const iconsPerLine = parseInt(query.iconsPerLine || query.perLine, 10) || iconsPerLineDefault;
    const iconSize = parseInt(query.size, 10) || sizeDefault;

    if (!iconName) {
      return res.status(400).json({ error: 'Você não especificou nenhum ícone!' });
    }

    if (Number.isNaN(iconsPerLine) || iconsPerLine < 1 || iconsPerLine > 60) {
      return res.status(400).json({ error: 'Ícones por linha deve ser um número entre 1 e 60' });
    }

    const iconNames = iconName.toLowerCase();

    const icons = await loadSvg(iconsDirectoryPath);
    const iconNamesList = iconNames.split(',');
    const generatedSvg = generateIcons(iconNamesList, iconsPerLine, icons, iconSize);

    res.set('Content-Type', 'image/svg+xml');
    return res.send(generatedSvg);
  } catch (error) {
    console.error(`Erro na solicitação: ${error.message}`);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = getIcons;
