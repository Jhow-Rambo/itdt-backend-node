import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import CountPeopleController from '../controllers/CountPeopleController';

const countPeopleRouter = Router();
const countPeopleController = new CountPeopleController();

countPeopleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      field_image: Joi.string().required(),
      toten_id: Joi.string().required(),
      date: Joi.date().required(),
    },
  }),
  countPeopleController.create,
);

countPeopleRouter.post(
  '/increment',
  celebrate({
    [Segments.BODY]: {
      toten_id: Joi.string().required(),
      in: Joi.string().required(),
      out: Joi.string().required(),
      date: Joi.date().required(),
    },
  }),
  countPeopleController.increment,
);

export default countPeopleRouter;
