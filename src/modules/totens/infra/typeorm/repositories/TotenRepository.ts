import { ITotenRepository } from '../../../domain/repositories/ITotenRepository';
import { getRepository, Repository } from 'typeorm';
import Toten from '../entities/Toten';
import { ICreateToten } from '../../../domain/models/ICreateToten';
import { IToten } from '../../../domain/models/IToten';

export class TotenRepository implements ITotenRepository {
  private ormRepository: Repository<Toten>;

  constructor() {
    this.ormRepository = getRepository(Toten);
  }

  public async create(data: ICreateToten): Promise<IToten> {
    const toten = this.ormRepository.create(data);

    await this.ormRepository.save(toten);

    return toten;
  }

  public async findAll(): Promise<IToten[]> {
    const totens = await this.ormRepository.find();

    return totens;
  }

  public async findByName(name: string): Promise<IToten | undefined> {
    const toten = this.ormRepository.findOne({
      where: { name },
    });

    return toten;
  }

  public async findById(id: string): Promise<IToten | undefined> {
    const toten = this.ormRepository.findOne({
      where: { id },
    });

    return toten;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
