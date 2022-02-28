import { IFauna } from '../models/IFauna';
import { ICreateFauna } from '../models/ICreateFauna';

export interface IFaunaRepository {
  create(data: ICreateFauna): Promise<IFauna>;
  findAll(): Promise<IFauna[] | undefined>;
}
