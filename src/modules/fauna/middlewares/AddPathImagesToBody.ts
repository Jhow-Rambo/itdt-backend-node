import { Request, Response, NextFunction } from 'express';

export const AddPathImagesToBody = () => {
  return (req: Request, res: Response, next: NextFunction): any => {
    if (req.route.methods.post) {
      req.body.normal_image =
        'https://itdi-inference.s3.us-east-2.amazonaws.com/' +
        req.files[0].originalname;
      req.body.inferred_image =
        'https://itdi-inference.s3.us-east-2.amazonaws.com/' +
        req.files[1].originalname;
    }
    next();
  };
};
