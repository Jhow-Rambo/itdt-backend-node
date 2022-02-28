import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import CountPeopleController from '../controllers/CountPeopleController';

const countPeopleRouter = Router();
const countPeopleController = new CountPeopleController();

countPeopleRouter.post(
  '/create/:totenId',
  celebrate({
    [Segments.BODY]: {
      field_image: Joi.string().required(),
      date: Joi.date().required(),
    },
    [Segments.PARAMS]: {
      totenId: Joi.string().uuid().required(),
    },
  }),
  countPeopleController.create,
);

countPeopleRouter.post(
  '/increment',
  celebrate({
    [Segments.BODY]: {
      totenId: Joi.string().uuid().required(),
      in: Joi.number().required(),
      out: Joi.number().required(),
      date: Joi.date().required(),
    },
  }),
  countPeopleController.increment,
);

export default countPeopleRouter;
