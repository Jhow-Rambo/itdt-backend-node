import { FakeCountPeopleRepository } from '@modules/count_people/domain/repositories/fakes/FakeCountPeopleRepository';
import AppError from '@shared/errors/AppError';
import CreateCountPopleService from '../CreateCountPeopleService';

let fakeCountPeopleRepository: FakeCountPeopleRepository;
let createCountPeople: CreateCountPopleService;

describe('should be able to create a new count section', () => {
  beforeEach(() => {
    fakeCountPeopleRepository = new FakeCountPeopleRepository();
    createCountPeople = new CreateCountPopleService(fakeCountPeopleRepository);
  });

  it('should be able to create a new count people section', async () => {
    const countPeople = await createCountPeople.execute({
      field_image: 'test',
      toten_id: 'test',
      date: new Date(),
    });

    expect(countPeople).toHaveProperty('id');
  });

  it('should not be able to create a new count people section with the same data', async () => {
    const date = new Date();

    await createCountPeople.execute({
      field_image: 'test',
      toten_id: 'test',
      date: date,
    });

    await expect(
      createCountPeople.execute({
        field_image: 'test',
        toten_id: 'test',
        date: date,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
