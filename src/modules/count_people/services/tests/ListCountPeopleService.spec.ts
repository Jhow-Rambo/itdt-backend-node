import { FakeCountPeopleRepository } from '@modules/count_people/domain/repositories/fakes/FakeCountPeopleRepository';
import ListCountPeopleService from '../ListCountPeopleService';

let fakeCountPeopleRepository: FakeCountPeopleRepository;
let listCountPeopleService: ListCountPeopleService;

const totenId = 'totenId';

const countPeople1 = {
  field_image: 'teste',
  date: new Date(),
  totenId: totenId,
};

const countPeople2 = {
  field_image: 'teste',
  date: new Date(),
  totenId: totenId,
};

describe('ListCountPeopleService', () => {
  beforeEach(() => {
    fakeCountPeopleRepository = new FakeCountPeopleRepository();
    listCountPeopleService = new ListCountPeopleService(
      fakeCountPeopleRepository,
    );
  });

  it('should be able to return all countPeople', async () => {
    await fakeCountPeopleRepository.create(countPeople1);
    await fakeCountPeopleRepository.create(countPeople2);

    const countPeople = await listCountPeopleService.execute(totenId);

    expect(countPeople).toHaveLength(2);
  });
});
