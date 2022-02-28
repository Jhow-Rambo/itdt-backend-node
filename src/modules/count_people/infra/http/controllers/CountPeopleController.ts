import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCountPeopleService from '@modules/count_people/services/CreateCountPeopleService';
import IncrementCountPeopleService from '@modules/count_people/services/IncrementCountPeopleService';

export default class CountPeopleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { field_image, totenId, date } = request.body;

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
    const { totenId, in: in_, out: out_, date } = request.body;

    const incrementCountPeople = container.resolve(IncrementCountPeopleService);

    const countPeople = await incrementCountPeople.execute({
      totenId,
      in: in_,
      out: out_,
      date,
    });

    return response.status(200).json(countPeople);
  }
}
