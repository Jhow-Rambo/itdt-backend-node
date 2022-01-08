import { IInference } from '../models/IInference';
import { ICreateInference } from '../models/ICreateInference';

export interface IInferenceRepository {
  create(data: ICreateInference): Promise<IInference>;
  findAll(): Promise<IInference[] | undefined>;
}
