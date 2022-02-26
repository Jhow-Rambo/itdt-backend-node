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
    const countPeople = this.ormRepository.create({
      in: 0,
      out: 0,
      data: data.date,
      field_image: data.field_image,
      toten_id: data.toten_id,
    });

    await this.ormRepository.save(countPeople);

    return countPeople;
  }

  public async increment(data: IIncrement): Promise<ICountPeople | undefined> {
    await this.ormRepository.increment({ id: data.id }, 'in', 1);

    return this.ormRepository.findOne(data.id);
  }

  public async decrement(data: IDecrement): Promise<ICountPeople | undefined> {
    await this.ormRepository.decrement({ id: data.id }, 'out', 1);

    return this.ormRepository.findOne(data.id);
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
