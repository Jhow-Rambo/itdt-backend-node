import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCountPeopleService from '@modules/count_people/services/CreateCountPeopleService';
import IncrementCountPeopleService from '@modules/count_people/services/IncrementCountPeopleService';
import ListCountPeopleService from '@modules/count_people/services/ListCountPeopleService';

export default class CountPeopleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { field_image, date } = request.body;

    const { totenId } = request.params;

    const createCountPeople = container.resolve(CreateCountPeopleService);

    const countPeople = await createCountPeople.execute({
      field_image,
      totenId,
      date,
    });

    return response.status(201).json(countPeople);
  }

  public async increment(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { in: in_, out: out_, date } = request.body;

    const { totenId } = request.params;

    const incrementCountPeople = container.resolve(IncrementCountPeopleService);

    const countPeople = await incrementCountPeople.execute({
      totenId,
      in: in_,
      out: out_,
      date,
    });

    return response.status(200).json(countPeople);
  }

  public async findByTotenId(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { totenId } = request.params;

    const listCountPeople = container.resolve(ListCountPeopleService);

    const countPeople = await listCountPeople.execute(totenId);

    return response.status(200).json(countPeople);
  }
}
