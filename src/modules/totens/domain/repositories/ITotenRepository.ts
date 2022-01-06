import { ICreateToten } from '../models/ICreateToten';
import { IToten } from '../models/IToten';

export interface ITotenRepository {
  create(data: ICreateToten): Promise<IToten>;
  findAll(): Promise<IToten[]>;
  findByName(name: string): Promise<IToten | undefined>;
  delete(id: string): Promise<void>;
}
