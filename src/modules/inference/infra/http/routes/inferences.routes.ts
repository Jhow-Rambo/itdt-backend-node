import { Router } from 'express';
import InferencesController from '../controllers/InferencesController';
import { celebrate, Joi, Segments } from 'celebrate';
import { UploadImages } from '../../../middlewares/Upload-Images';
import { AddPathImagesToBody } from '../../../middlewares/AddPathImagesToBody';

const inferencesRouter = Router();
const inferencesController = new InferencesController();

inferencesRouter.get('/', inferencesController.list);

// removed two lines below
//  UploadImages(),
// AddPathImagesToBody(),

inferencesRouter.post(
  '/:totenId',
  celebrate({
    [Segments.BODY]: {
      normal_image: Joi.string().required(),
      inferred_image: Joi.string().required(),
      inference: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      totenId: Joi.string().uuid().required(),
    },
  }),
  inferencesController.create,
);

export default inferencesRouter;
