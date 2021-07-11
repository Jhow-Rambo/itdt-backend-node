import { Router } from 'express';
import InferencesController from '../controllers/InferencesController';
import { celebrate, Joi, Segments } from 'celebrate';
import { UploadImages } from '../middlewares/Upload-Images';
import { AddPathImagesToBody } from '../middlewares/AddPathImagesToBody';

const inferencesRouter = Router();
const inferencesController = new InferencesController();

inferencesRouter.get('/', inferencesController.index);

inferencesRouter.post(
  '/',
  UploadImages(),
  AddPathImagesToBody(),
  celebrate({
    [Segments.BODY]: {
      normal_image: Joi.string().required(),
      inferred_image: Joi.string().required(),
      inference: Joi.string().required(),
      created_at: Joi.string().required(),
    },
  }),
  inferencesController.create,
);

export default inferencesRouter;
