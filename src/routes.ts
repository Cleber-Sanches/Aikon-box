import express, { Router, Request, Response } from 'express';
import { getSvgWithModifiedText } from './controllers/customSvgController';
import { getIcons } from './controllers/iconController';
import { getMethodsHttp } from './controllers/methodsHttpController';
import { getStatusCode } from './controllers/statusCodeController';

const routes: Router = express.Router();

routes.get('/icons', async (req: Request, res: Response) => {
  await getIcons(req, res);
});
routes.get('/doc/statuscode', async (req: Request, res: Response) => {
  await getStatusCode(req, res);
});
routes.get('/doc/methods', async (req: Request, res: Response) => {
  await getMethodsHttp(req, res);
});
routes.get('/doc/custom', async (req: Request, res: Response) => {
  await getSvgWithModifiedText(req, res);
});

export default routes;
