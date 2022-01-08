import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateInferenceService from '../../../services/CreateInferenceService';
import ListInferenceService from '../../../services/ListInferenceService';

export default class InferenceController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listInferences = container.resolve(ListInferenceService);

    const inferences = await listInferences.execute();

    return response.json(inferences);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { normal_image, inferred_image, inference } = request.body;
    const { totenId } = request.params;

    const createInference = container.resolve(CreateInferenceService);

    const Inference = await createInference.execute({
      normal_image,
      inferred_image,
      inference,
      totenId,
    });

    return response.status(201).json(Inference);
  }
}
