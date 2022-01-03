import { ICreateInference } from '@modules/inference/domain/models/ICreateInference';
import { IToten } from '../models/IToten';

export interface ITotenRepository {
  create(data: ICreateInference): Promise<IToten>;
  findAll(): Promise<IToten[]>;
  delete(id: string): Promise<void>;
}
