import { ICreateFauna } from '@modules/fauna/domain/models/ICreateFauna';
import { IFaunaRepository } from '@modules/fauna/domain/repositories/IFaunaRepository';
import { getRepository, Repository } from 'typeorm';
import Fauna from '../entities/Fauna';

export class FaunaRepository implements IFaunaRepository {
  private ormRepository: Repository<Fauna>;

  constructor() {
    this.ormRepository = getRepository(Fauna);
  }

  public async create(data: ICreateFauna): Promise<Fauna> {
    const inference = this.ormRepository.create({
      normal_image: data.normal_image,
      inferred_image: data.inferred_image,
      inference: data.inference,
      totenId: data.totenId,
    });

    await this.ormRepository.save(inference);

    return inference;
  }

  public async findAll(): Promise<Fauna[] | undefined> {
    const inferences = await this.ormRepository.find();

    return inferences;
  }
}
