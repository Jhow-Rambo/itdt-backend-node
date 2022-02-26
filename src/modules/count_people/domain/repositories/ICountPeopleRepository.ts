import { ICountPeople } from '../models/ICountPeople';
import { IIncrement } from '../models/IIncrement';
import { IDecrement } from '../models/IDecrement';
import { ICreateCountPeople } from '../models/ICreateCountPeople';

export interface ICountPeopleRepository {
  create(data: ICreateCountPeople): Promise<ICountPeople>;
  increment(data: IIncrement): Promise<ICountPeople | undefined>;
  decrement(data: IDecrement): Promise<ICountPeople | undefined>;
  findOne(id: string): Promise<ICountPeople | undefined>;
  findByTotenId(totenId: string): Promise<ICountPeople[] | undefined>;
  findByDate(date: Date): Promise<ICountPeople | undefined>;
  changeImage(id: string, image: string): Promise<ICountPeople | undefined>;
}
