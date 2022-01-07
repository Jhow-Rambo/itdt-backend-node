import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import TotenController from '../controllers/TotenController';

const totensRouter = Router();
const totensController = new TotenController();

totensRouter.get('/', totensController.list);

totensRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      localization: Joi.string().required(),
    },
  }),
  totensController.create,
);

totensRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  totensController.delete,
);

export default totensRouter;
