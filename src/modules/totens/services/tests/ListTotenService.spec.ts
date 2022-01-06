import { FakeTotensRepository } from '@modules/totens/domain/repositories/fakes/FakeTotensRepository';
import { ListTotenService } from '../ListTotenService';

let fakeTotenRepository: FakeTotensRepository;
let listToten: ListTotenService;

describe('ListToten', () => {
  beforeEach(() => {
    fakeTotenRepository = new FakeTotensRepository();
    listToten = new ListTotenService(fakeTotenRepository);
  });

  it('should be able to list all totens', async () => {
    await fakeTotenRepository.create({
      name: 'Toten 1',
      description: 'Toten 1 description',
      localization: 'Toten 1 localization',
    });

    await fakeTotenRepository.create({
      name: 'Toten 2',
      description: 'Toten 2 description',
      localization: 'Toten 2 localization',
    });

    const totens = await listToten.execute();

    expect(totens).toHaveLength(2);
  });
});
