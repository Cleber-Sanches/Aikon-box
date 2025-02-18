import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
import routes from './routes';

app.use(cors());

app.use(routes);

const port: number | string = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
