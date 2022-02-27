import { v4 } from 'uuid';
import { ICountPeopleRepository } from '../ICountPeopleRepository';
import { ICountPeople } from '../../models/ICountPeople';
import { ICreateCountPeople } from '../../models/ICreateCountPeople';
import CountPeople from '@modules/count_people/infra/typeorm/entities/CountPeople';
import { IIncrement } from '../../models/IIncrement';

export class FakeCountPeopleRepository implements ICountPeopleRepository {
  private countPeople: ICountPeople[] = [];

  public async findByTotenId(
    totenId: string,
  ): Promise<ICountPeople[] | undefined> {
    const countPeople = this.countPeople.filter(
      countPeople => countPeople.toten_id === totenId,
    );

    return countPeople;
  }

  public async increment(data: IIncrement): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.filter(
      countPeople => countPeople.toten_id === data.toten_id,
    );

    const lastElement = countPeople.length - 1;

    if (countPeople) {
      countPeople[lastElement].in += data.in;
      countPeople[lastElement].out += data.out;
    }

    return countPeople[lastElement];
  }

  public async findOne(id: string): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.id === id,
    );

    return countPeople;
  }

  public async findLast(toten_id: string): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.filter(
      countPeople => countPeople.id === toten_id,
    );

    const lastElement = countPeople.length - 1;

    return countPeople[lastElement];
  }

  public async findByDate(date: Date): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.date === date,
    );

    return countPeople;
  }

  public async create(data: ICreateCountPeople): Promise<ICountPeople> {
    const countPeople = new CountPeople();

    countPeople.id = v4();
    countPeople.in = 0;
    countPeople.out = 0;
    countPeople.date = data.date;
    countPeople.field_image = data.field_image;
    countPeople.toten_id = data.toten_id;

    this.countPeople.push(countPeople);

    return countPeople;
  }

  public async changeImage(
    id: string,
    image: string,
  ): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.id === id,
    );

    if (countPeople) {
      countPeople.field_image = image;
    }

    return countPeople;
  }
}
