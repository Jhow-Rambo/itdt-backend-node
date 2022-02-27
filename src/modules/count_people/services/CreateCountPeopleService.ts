import { inject, injectable } from 'tsyringe';
import { ICreateCountPeople } from '../domain/models/ICreateCountPeople';
import AppError from '@shared/errors/AppError';
import { ICountPeople } from '../domain/models/ICountPeople';
import { ICountPeopleRepository } from '../domain/repositories/ICountPeopleRepository';

@injectable()
export default class CreateCountPeopleService {
  constructor(
    @inject('CountPeopleRepository')
    private countPeopleRepository: ICountPeopleRepository,
  ) {}

  public async execute(data: ICreateCountPeople): Promise<ICountPeople> {
    const countPersonExist = await this.countPeopleRepository.findByDate(
      data.date,
    );

    if (countPersonExist) {
      throw new AppError('CountPeople with same date already exists');
    }

    const CountPerson = await this.countPeopleRepository.create(data);

    return CountPerson;
  }
}
