import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFaunaService from '../../../services/CreateFaunaService';
import ListFaunaService from '../../../services/ListFaunaService';

export default class InferenceController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listFauna = container.resolve(ListFaunaService);

    const Fauna = await listFauna.execute();

    return response.json(Fauna);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { normal_image, inferred_image, inference } = request.body;
    const { totenId } = request.params;

    const createFauna = container.resolve(CreateFaunaService);

    const Fauna = await createFauna.execute({
      normal_image,
      inferred_image,
      inference,
      totenId,
    });

    return response.status(201).json(Fauna);
  }
}
