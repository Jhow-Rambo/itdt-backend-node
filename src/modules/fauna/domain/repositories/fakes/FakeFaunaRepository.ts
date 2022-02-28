import { v4 as uuid } from 'uuid';
import { IFaunaRepository } from '../IFaunaRepository';
import { IFauna } from '../../models/IFauna';
import { ICreateFauna } from '../../models/ICreateFauna';
import Fauna from '../../../infra/typeorm/entities/Fauna';

export class FakeFaunaRepository implements IFaunaRepository {
  private inferences: Fauna[] = [];

  public async create(data: ICreateFauna): Promise<IFauna> {
    const inference = new Fauna();

    inference.id = uuid();
    inference.normal_image = data.normal_image;
    inference.inferred_image = data.inferred_image;
    inference.inference = data.inference;
    inference.totenId = data.totenId;

    this.inferences.push(inference);

    return inference;
  }

  public async findAll(): Promise<IFauna[]> {
    return this.inferences;
  }
}
