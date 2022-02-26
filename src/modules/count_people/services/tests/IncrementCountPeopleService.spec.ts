import { FakeCountPeopleRepository } from '@modules/count_people/domain/repositories/fakes/FakeCountPeopleRepository';
import IncrementCountPeopleService from '../IncrementCountPeopleService';
import CreateCountPopleService from '../CreateCountPeopleService';

let fakeCountPeopleRepository: FakeCountPeopleRepository;
let incrementCountPeople: IncrementCountPeopleService;
let createCountPeople: CreateCountPopleService;

describe('should be able to increment a number in a count people section', () => {
  beforeEach(() => {
    fakeCountPeopleRepository = new FakeCountPeopleRepository();
    incrementCountPeople = new IncrementCountPeopleService(
      fakeCountPeopleRepository,
    );
    createCountPeople = new CreateCountPopleService(fakeCountPeopleRepository);
  });

  it('should be able to increment a number in a count people section', async () => {
    const countPeople = await createCountPeople.execute({
      field_image: 'test',
      toten_id: 'test',
      date: new Date(),
    });

    const data = {
      toten_id: countPeople.id,
      date: countPeople.date,
    };

    await incrementCountPeople.execute(data);

    expect(countPeople.in).toBe(1);
  });

  it('should be able to create a new section if dates are diferent', async () => {
    const date = new Date();

    const countPeople = await createCountPeople.execute({
      field_image: 'test',
      toten_id: 'test',
      date: date,
    });

    const data = {
      toten_id: countPeople.id,
      date: countPeople.date,
    };

    await incrementCountPeople.execute(data);

    expect(countPeople).toHaveLength(2);
  });
});
