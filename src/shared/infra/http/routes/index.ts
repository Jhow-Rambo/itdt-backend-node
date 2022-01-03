import inferencesRouter from '@modules/inference/infra/http/routes/inferences.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/inference', inferencesRouter);

export default routes;
