import { Request, Response } from 'express';
import CreateInferenceService from '../services/CreateInferenceService';
import ListInferenceService from '../services/ListInferenceService';

export default class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listInferences = new ListInferenceService();

    const inferences = await listInferences.execute();

    return response.json(inferences);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { normal_image, inferred_image, inference, created_at } =
      request.body;

    const createInference = new CreateInferenceService();

    const Inference = await createInference.execute({
      normal_image,
      inferred_image,
      inference,
      created_at,
    });

    return response.json(Inference);
  }
}
