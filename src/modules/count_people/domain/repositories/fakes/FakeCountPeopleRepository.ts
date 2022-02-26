import { v4 } from 'uuid';
import { ICountPeopleRepository } from '../ICountPeopleRepository';
import { ICountPeople } from '../../models/ICountPeople';
import { IDecrement } from '../../models/IDecrement';
import { ICreateCountPeople } from '../../models/ICreateCountPeople';
import CountPeople from '@modules/count_people/infra/typeorm/entities/CountPeople';
import { IIncrement } from '../../models/IIncrement';

export class FakeCountPeopleRepository implements ICountPeopleRepository {
  private countPeople: ICountPeople[] = [];

  public async increment(data: IIncrement): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.id === data.id,
    );

    if (countPeople) {
      countPeople.in = countPeople.in + 1;
    }

    return countPeople;
  }

  public async decrement(data: IDecrement): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.id === data.id,
    );

    if (countPeople) {
      countPeople.in = countPeople.in - 1;
    }

    return countPeople;
  }

  public async findOne(id: string): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.id === id,
    );

    return countPeople;
  }

  public async findByTotenId(
    totenId: string,
  ): Promise<ICountPeople[] | undefined> {
    const countPeople = this.countPeople.filter(
      countPeople => countPeople.toten_id === totenId,
    );

    return countPeople;
  }

  public async findByDate(date: Date): Promise<ICountPeople | undefined> {
    const countPeople = this.countPeople.find(
      countPeople => countPeople.data === date,
    );

    return countPeople;
  }

  public async create(data: ICreateCountPeople): Promise<ICountPeople> {
    const countPeople = new CountPeople();

    countPeople.id = v4();
    countPeople.in = 0;
    countPeople.out = 0;
    countPeople.data = data.date;
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
