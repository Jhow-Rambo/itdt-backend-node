import { getCustomRepository } from 'typeorm';
import Inference from '../typeorm/entities/Inference';
import { InferenceRepository } from '../typeorm/repositories/InferencesRepository';

class ListInferenceService {
  public async execute(): Promise<Inference[]> {
    const inferencesRepository = getCustomRepository(InferenceRepository);

    const products = inferencesRepository.find();

    return products;
  }
}

export default ListInferenceService;
