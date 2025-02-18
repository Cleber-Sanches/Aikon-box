import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const loadSvg = async (directoryPath: string): Promise<{ [key: string]: string }> => {
  try {
    const svgs: { [key: string]: string } = {};

    const files = await readdir(directoryPath);

    await Promise.all(
      files.map(async (file) => {
        const svgName = file.replace(/\.svg$/, '');
        const filePath = join(directoryPath, file);

        const data = await readFile(filePath, 'utf8');
        svgs[svgName] = data;
      })
    );

    return svgs;
  } catch (error: any) {
    console.error(`Erro ao carregar arquivos SVG: ${error.message}`);
    throw error;
  }
};

export default loadSvg;
