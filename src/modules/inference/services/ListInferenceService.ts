import { getCustomRepository } from 'typeorm';
import Inference from '../infra/typeorm/entities/Inference';
import { InferenceRepository } from '../infra/typeorm/repositories/InferencesRepository';

class ListInferenceService {
  public async execute(): Promise<Inference[]> {
    const inferencesRepository = getCustomRepository(InferenceRepository);

    const products = inferencesRepository.find();

    return products;
  }
}

export default ListInferenceService;
