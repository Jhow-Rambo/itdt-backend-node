import { FakeCountPeopleRepository } from '@modules/count_people/domain/repositories/fakes/FakeCountPeopleRepository';
import IncrementCountPeopleService from '../IncrementCountPeopleService';
import CreateCountPeopleService from '../CreateCountPeopleService';

let fakeCountPeopleRepository: FakeCountPeopleRepository;
let incrementCountPeople: IncrementCountPeopleService;
let createCountPeople: CreateCountPeopleService;

describe('should be able to increment a number in a count people section', () => {
  beforeEach(() => {
    fakeCountPeopleRepository = new FakeCountPeopleRepository();
    incrementCountPeople = new IncrementCountPeopleService(
      fakeCountPeopleRepository,
    );
    createCountPeople = new CreateCountPeopleService(fakeCountPeopleRepository);
  });

  it('should be able to increment a number in a count people section', async () => {
    const countPeople = await createCountPeople.execute({
      field_image: 'test',
      toten_id: 'test',
      date: new Date(),
    });

    const data = {
      toten_id: countPeople.toten_id,
      in: 3,
      out: 3,
      date: countPeople.date,
    };

    await incrementCountPeople.execute(data);

    expect(countPeople.in).toBe(3);
    expect(countPeople.out).toBe(3);
  });
});
