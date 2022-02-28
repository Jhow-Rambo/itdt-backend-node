import { inject, injectable } from 'tsyringe';
import { ICreateCountPeople } from '../domain/models/ICreateCountPeople';
import { ICountPeople } from '../domain/models/ICountPeople';
import { ICountPeopleRepository } from '../domain/repositories/ICountPeopleRepository';

@injectable()
export default class CreateCountPeopleService {
  constructor(
    @inject('CountPeopleRepository')
    private countPeopleRepository: ICountPeopleRepository,
  ) {}

  public async execute(data: ICreateCountPeople): Promise<ICountPeople> {
    const CountPerson = await this.countPeopleRepository.create(data);

    return CountPerson;
  }
}
