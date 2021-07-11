import { Router } from 'express';
import InferencesController from '../controllers/InferencesController';
import { celebrate, Joi, Segments } from 'celebrate';

const inferencesRouter = Router();
const inferencesController = new InferencesController();

inferencesRouter.get('/', inferencesController.index);

inferencesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      normal_image: Joi.string().required(),
      inferred_image: Joi.string().required(),
      inference: Joi.object().required(),
      created_at: Joi.string().required(),
    },
  }),
  inferencesController.create,
);

export default inferencesRouter;
