import { inject, injectable } from 'tsyringe';
import { IIncrement } from '../domain/models/IIncrement';
// import AppError from '@shared/errors/AppError';
import { ICountPeople } from '../domain/models/ICountPeople';
import { ICountPeopleRepository } from '../domain/repositories/ICountPeopleRepository';

@injectable()
export default class IncrementCountPeopleService {
  constructor(
    @inject('CountPeopleRepository')
    private countPeopleRepository: ICountPeopleRepository,
  ) {}

  public async execute(data: IIncrement): Promise<ICountPeople | undefined> {
    await this.countPeopleRepository.increment(data);

    return this.countPeopleRepository.findLast(data.toten_id);
  }
}
