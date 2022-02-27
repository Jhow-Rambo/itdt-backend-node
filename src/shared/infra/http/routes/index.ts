import inferencesRouter from '@modules/inference/infra/http/routes/inferences.routes';
import totensRouter from '@modules/totens/infra/http/routes/totens.router';
import countPeopleRouter from '@modules/count_people/infra/http/routes/countPeople.router';
import { Router } from 'express';

const routes = Router();

routes.use('/inference', inferencesRouter);
routes.use('/toten', totensRouter);
routes.use('/count-people', countPeopleRouter);

export default routes;
