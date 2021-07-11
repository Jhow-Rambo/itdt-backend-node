import inferencesRouter from '@modules/inference/routes/inferences.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/inference', inferencesRouter);

export default routes;
