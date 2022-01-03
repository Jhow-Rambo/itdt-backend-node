import { container } from 'tsyringe';

import { IInferenceRepository } from '@modules/inference/domain/repositories/IInferenceRepository';
import { InferenceRepository } from '@modules/inference/infra/typeorm/repositories/InferencesRepository';

container.registerSingleton<IInferenceRepository>(
  'InferenceRepository',
  InferenceRepository,
);
