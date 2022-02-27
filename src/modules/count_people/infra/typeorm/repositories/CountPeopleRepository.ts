import { ICountPeopleRepository } from '@modules/count_people/domain/repositories/ICountPeopleRepository';
import { ICountPeople } from '@modules/count_people/domain/models/ICountPeople';
import { getRepository, Repository } from 'typeorm';
import CountPeople from '../entities/CountPeople';
import { IIncrement } from '@modules/count_people/domain/models/IIncrement';
import { IDecrement } from '@modules/count_people/domain/models/IDecrement';
import { ICreateCountPeople } from '@modules/count_people/domain/models/ICreateCountPeople';

export class CountPeopleRepository implements ICountPeopleRepository {
  private ormRepository: Repository<CountPeople>;

  constructor() {
    this.ormRepository = getRepository(CountPeople);
  }

  public async create(data: ICreateCountPeople): Promise<ICountPeople> {
    const countPeople = {
      in: 0,
      out: 0,
      toten_id: data.toten_id,
      field_image: data.field_image,
      date: data.date,
    };

    const savedCountPeople = await this.ormRepository.create(countPeople);

    return savedCountPeople;
  }

  public async increment(data: IIncrement): Promise<ICountPeople | undefined> {
    const id = await this.ormRepository.find({
      where: { toten_id: data.toten_id },
    });
    // TODO: Need to chang id[0].id to last id
    await this.ormRepository.increment({ id: id[0].id }, 'in', 1);

    return this.ormRepository.findOne(id[0].id);
  }

  public async decrement(data: IDecrement): Promise<ICountPeople | undefined> {
    const id = await this.ormRepository.find({
      where: { toten_id: data.toten_id },
    });
    // TODO: Need to chang id[0].id to last id
    await this.ormRepository.decrement({ id: id[0].id }, 'out', 1);

    return this.ormRepository.findOne(id[0].id);
  }

  public async findOne(id: string): Promise<ICountPeople | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByTotenId(
    totenId: string,
  ): Promise<ICountPeople[] | undefined> {
    return this.ormRepository.find({ where: { toten_id: totenId } });
  }

  public async changeImage(
    id: string,
    image: string,
  ): Promise<ICountPeople | undefined> {
    await this.ormRepository.update(id, { field_image: image });

    return this.ormRepository.findOne(id);
  }

  public async findByDate(date: Date): Promise<ICountPeople | undefined> {
    return this.ormRepository.findOne({ where: { data: date } });
  }
}
