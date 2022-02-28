import { Router } from 'express';
import FaunaController from '../controllers/FaunaController';
import { celebrate, Joi, Segments } from 'celebrate';
import { UploadImages } from '../../../middlewares/Upload-Images';
import { AddPathImagesToBody } from '../../../middlewares/AddPathImagesToBody';

const faunaRouter = Router();
const faunaController = new FaunaController();

faunaRouter.get('/', faunaController.list);

// removed two lines below
//  UploadImages(),
// AddPathImagesToBody(),

faunaRouter.post(
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
  faunaController.create,
);

export default faunaRouter;
