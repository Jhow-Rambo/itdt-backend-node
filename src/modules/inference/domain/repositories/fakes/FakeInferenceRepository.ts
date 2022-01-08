import { v4 as uuid } from 'uuid';
import { IInferenceRepository } from '../IInferenceRepository';
import { IInference } from '../../models/IInference';
import { ICreateInference } from '../../models/ICreateInference';
import Inference from '../../../infra/typeorm/entities/Inference';

export class FakeInferenceRepository implements IInferenceRepository {
  private inferences: Inference[] = [];

  public async create(data: ICreateInference): Promise<IInference> {
    const inference = new Inference();

    inference.id = uuid();
    inference.normal_image = data.normal_image;
    inference.inferred_image = data.inferred_image;
    inference.inference = data.inference;
    inference.totenId = data.totenId;

    this.inferences.push(inference);

    return inference;
  }

  public async findAll(): Promise<IInference[]> {
    return this.inferences;
  }
}
