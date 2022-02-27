import { container } from 'tsyringe';

import { IInferenceRepository } from '@modules/inference/domain/repositories/IInferenceRepository';
import { InferenceRepository } from '@modules/inference/infra/typeorm/repositories/InferencesRepository';
import { ITotenRepository } from '@modules/totens/domain/repositories/ITotenRepository';
import { TotenRepository } from '@modules/totens/infra/typeorm/repositories/TotenRepository';
import { ICountPeopleRepository } from '@modules/count_people/domain/repositories/ICountPeopleRepository';
import { CountPeopleRepository } from '@modules/count_people/infra/typeorm/repositories/CountPeopleRepository';

container.registerSingleton<IInferenceRepository>(
  'InferenceRepository',
  InferenceRepository,
);

container.registerSingleton<ITotenRepository>(
  'TotenRepository',
  TotenRepository,
);

container.registerSingleton<ICountPeopleRepository>(
  'CountPeopleRepository',
  CountPeopleRepository,
);
