import { ICountPeopleRepository } from '@modules/count_people/domain/repositories/ICountPeopleRepository';
import { ICountPeople } from '@modules/count_people/domain/models/ICountPeople';
import { getRepository, Repository } from 'typeorm';
import CountPeople from '../entities/CountPeople';
import { IIncrement } from '@modules/count_people/domain/models/IIncrement';
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
      totenId: data.totenId,
      field_image: data.field_image,
      date: data.date,
    };

    const savedCountPeople = await this.ormRepository.save(countPeople);

    return savedCountPeople;
  }

  public async increment(data: IIncrement): Promise<ICountPeople | undefined> {
    const countPeople = await this.ormRepository.find({
      where: { totenId: data.totenId },
    });

    const lastElement = countPeople.length - 1;

    await this.ormRepository.increment(
      { id: countPeople[lastElement].id },
      'in',
      data.in,
    );

    await this.ormRepository.increment(
      { id: countPeople[lastElement].id },
      'out',
      data.out,
    );

    return this.ormRepository.findOne(countPeople[lastElement].id);
  }

  public async findOne(id: string): Promise<ICountPeople | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findLast(totenId: string): Promise<ICountPeople | undefined> {
    const countPeople = await this.ormRepository.find({
      where: { totenId: totenId },
    });

    const lastElement = countPeople.length - 1;

    return countPeople[lastElement];
  }

  public async findByTotenId(
    totenId: string,
  ): Promise<ICountPeople[] | undefined> {
    return this.ormRepository.find({ where: { totenId: totenId } });
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
