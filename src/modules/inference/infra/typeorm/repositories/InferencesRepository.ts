import { ICreateInference } from '@modules/inference/domain/models/ICreateInference';
import { IInferenceRepository } from '@modules/inference/domain/repositories/IInferenceRepository';
import { getRepository, Repository } from 'typeorm';
import Inference from '../entities/Inference';

export class InferenceRepository implements IInferenceRepository {
  private ormRepository: Repository<Inference>;

  constructor() {
    this.ormRepository = getRepository(Inference);
  }

  public async create(data: ICreateInference): Promise<Inference> {
    const inference = this.ormRepository.create({
      normal_image: data.normal_image,
      inferred_image: data.inferred_image,
      inference: data.inference,
      totenId: data.totenId,
    });

    await this.ormRepository.save(inference);

    return inference;
  }

  public async findAll(): Promise<Inference[] | undefined> {
    const inferences = await this.ormRepository.find();

    return inferences;
  }
}
