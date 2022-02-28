import { container } from 'tsyringe';

import { IFaunaRepository } from '@modules/fauna/domain/repositories/IFaunaRepository';
import { FaunaRepository } from '@modules/fauna/infra/typeorm/repositories/FaunaRepository';
import { ITotenRepository } from '@modules/totens/domain/repositories/ITotenRepository';
import { TotenRepository } from '@modules/totens/infra/typeorm/repositories/TotenRepository';
import { ICountPeopleRepository } from '@modules/count_people/domain/repositories/ICountPeopleRepository';
import { CountPeopleRepository } from '@modules/count_people/infra/typeorm/repositories/CountPeopleRepository';

container.registerSingleton<IFaunaRepository>(
  'FaunaRepository',
  FaunaRepository,
);

container.registerSingleton<ITotenRepository>(
  'TotenRepository',
  TotenRepository,
);

container.registerSingleton<ICountPeopleRepository>(
  'CountPeopleRepository',
  CountPeopleRepository,
);
