import { inject, injectable } from 'tsyringe';
import { IInference } from '../domain/models/IInference';
import { IInferenceRepository } from '../domain/repositories/IInferenceRepository';

@injectable()
class ListInferenceService {
  constructor(
    @inject('InferenceRepository')
    private inferenceRepository: IInferenceRepository,
  ) {}

  public async execute(): Promise<IInference[]> {
    const inferences = this.inferenceRepository.findAll();

    return inferences;
  }
}

export default ListInferenceService;
