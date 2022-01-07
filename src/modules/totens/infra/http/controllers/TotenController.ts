import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTotenService from '@modules/totens/services/CreateTotenService';
import ListTotenService from '@modules/totens/services/ListTotenService';
import DeleteTotenService from '@modules/totens/services/DeleteTotenService';

export default class TotenController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, localization } = request.body;

    const createToten = container.resolve(CreateTotenService);

    const toten = await createToten.execute({
      name,
      description,
      localization,
    });

    return response.status(201).json(toten);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listTotens = container.resolve(ListTotenService);

    const totens = await listTotens.execute();

    return response.json(totens);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteToten = container.resolve(DeleteTotenService);

    await deleteToten.execute(id);

    return response.json([]);
  }
}
