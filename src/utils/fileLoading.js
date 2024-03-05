const { readdir, readFile } = require('fs/promises');
const { join } = require('path');

const loadSvg = async (directoryPath) => {
  try {
    const svgs = {};

    const files = await readdir(directoryPath);

    await Promise.all(files.map(async (file) => {
      const svgName = file.replace(/\.svg$/, '');
      const filePath = join(directoryPath, file);

      const data = await readFile(filePath, 'utf8');
      svgs[svgName] = data;
    }));

    return svgs;
  } catch (error) {
    console.error(`Erro ao carregar arquivos SVG: ${error.message}`);
    throw error;
  }
};

module.exports = loadSvg;
