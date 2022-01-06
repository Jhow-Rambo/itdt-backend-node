import { FakeTotensRepository } from '@modules/totens/domain/repositories/fakes/FakeTotensRepository';
import AppError from '@shared/errors/AppError';
import CreateTotenService from '../CreateTotenService';

let fakeTotensRepository: FakeTotensRepository;
let createTotens: CreateTotenService;

describe('CreateCategory', () => {
  beforeEach(() => {
    fakeTotensRepository = new FakeTotensRepository();
    createTotens = new CreateTotenService(fakeTotensRepository);
  });

  it('should be able to create a new Toten', async () => {
    const toten = await createTotens.execute({
      name: 'Toten 1',
      description: 'Toten 1 description',
      localization: 'Toten 1 localization',
    });

    expect(toten).toHaveProperty('id');
  });

  it('should not be able to create Toten with the same name', async () => {
    await createTotens.execute({
      name: 'Toten 1',
      description: 'Toten 1 description',
      localization: 'Toten 1 localization',
    });

    await expect(
      createTotens.execute({
        name: 'Toten 1',
        description: 'Toten 1 description',
        localization: 'Toten 1 localization',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
