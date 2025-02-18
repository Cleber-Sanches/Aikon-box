import { resolve } from 'path';
import { Request, Response } from 'express';
import { generateOneSvg } from '../utils/generateOneSvg';
import loadSvg from '../utils/fileLoading';

const svgDirPath = resolve(__dirname, '../../assets/methods');

const getMethodsHttp = async (req: Request, res: Response) => {
  try {
    const { i } = req.query;

    if (!i) {
      return res.status(400).json({ error: 'Você não especificou nenhum ícone!' });
    }

    const nameMethods = (i as string).split(',');

    const files = await loadSvg(svgDirPath);
    const svg = generateOneSvg(nameMethods, files);

    res.set('Content-Type', 'image/svg+xml');
    return res.send(svg);
  } catch (error: any) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

export { getMethodsHttp };
