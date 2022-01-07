import { FakeTotensRepository } from '@modules/totens/domain/repositories/fakes/FakeTotensRepository';
import AppError from '@shared/errors/AppError';
import DeleteTotenService from '../DeleteTotenService';

let fakeTotenRepository: FakeTotensRepository;
let deleteToten: DeleteTotenService;

describe('DeleteToten', () => {
  beforeEach(() => {
    fakeTotenRepository = new FakeTotensRepository();
    deleteToten = new DeleteTotenService(fakeTotenRepository);
  });

  it('should be able to delete a toten', async () => {
    const toten = await fakeTotenRepository.create({
      name: 'Toten 1',
      description: 'Toten 1 description',
      localization: 'Toten 1 localization',
    });

    await deleteToten.execute(toten.id);

    expect(await fakeTotenRepository.findById(toten.id)).toBeUndefined();
  });

  it('should not be able to delete a toten that does not exist', async () => {
    await expect(deleteToten.execute('invalid-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
