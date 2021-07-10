import { getCustomRepository } from 'typeorm';
import Inference from '../typeorm/entities/Inference';
import { InferenceRepository } from '../typeorm/repositories/InferencesRepository';

interface IRequest {
  normal_image: string;
  inferred_image: string;
  inference: JSON;
  created_at: string;
}

class CreatInferenceService {
  public async execute({
    normal_image,
    inferred_image,
    inference,
    created_at,
  }: IRequest): Promise<Inference> {
    const inferencesRepository = getCustomRepository(InferenceRepository);

    const Inference = inferencesRepository.create({
      normal_image,
      inferred_image,
      inference,
      created_at,
    });

    await inferencesRepository.save(Inference);

    return Inference;
  }
}

export default CreatInferenceService;
