import { inject, injectable } from 'tsyringe';
import { ICreateInference } from '../domain/models/ICreateInference';
import { IInference } from '../domain/models/IInference';
import { IInferenceRepository } from '../domain/repositories/IInferenceRepository';

@injectable()
class CreatInferenceService {
  constructor(
    @inject('InferenceRepository')
    private inferenceRepository: IInferenceRepository,
  ) {}

  public async execute({
    normal_image,
    inferred_image,
    inference,
    created_at,
  }: ICreateInference): Promise<IInference> {
    const Inference = await this.inferenceRepository.create({
      normal_image,
      inferred_image,
      inference,
      created_at,
    });

    return Inference;
  }
}

export default CreatInferenceService;
