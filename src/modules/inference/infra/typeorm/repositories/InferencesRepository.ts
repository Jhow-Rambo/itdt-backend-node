import { ICreateInference } from '@modules/inference/domain/models/ICreateInference';
import { IInference } from '@modules/inference/domain/models/IInference';
import { IInferenceRepository } from '@modules/inference/domain/repositories/IInferenceRepository';
import { getRepository, Repository } from 'typeorm';
import Inference from '../entities/Inference';

export class InferenceRepository implements IInferenceRepository {
  private ormRepository: Repository<Inference>;

  constructor() {
    this.ormRepository = getRepository(Inference);
  }

  public async create(data: ICreateInference): Promise<IInference> {
    const inference = this.ormRepository.create(data);

    await this.ormRepository.save(inference);

    return inference;
  }

  public async findAll(): Promise<IInference[]> {
    const inferences = await this.ormRepository.find();

    return inferences;
  }
}
