import { FakeTotensRepository } from '@modules/totens/domain/repositories/fakes/FakeTotensRepository';
import AppError from '@shared/errors/AppError';

let fakeTotensRepository: FakeTotensRepository;
// let createTotens: CreateTotensService;

describe('CreateCategory', () => {
  beforeEach(() => {
    fakeTotensRepository = new FakeTotensRepository();
  });

  it('should be able to create a new Toten', async () => {
    const toten = await fakeTotensRepository.create({
      name: 'Toten 1',
      description: 'Toten 1 description',
      localization: 'Toten 1 localization',
    });

    expect(toten).toHaveProperty('id');
  });
});
