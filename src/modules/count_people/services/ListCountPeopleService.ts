import { inject, injectable } from 'tsyringe';
import { ICountPeople } from '../domain/models/ICountPeople';
import { ICountPeopleRepository } from '../domain/repositories/ICountPeopleRepository';

@injectable()
export default class ListCountPeopleService {
  constructor(
    @inject('CountPeopleRepository')
    private countPeopleRepository: ICountPeopleRepository,
  ) {}

  public async execute(data: string): Promise<ICountPeople[] | undefined> {
    const countPeople = await this.countPeopleRepository.findByTotenId(data);

    return countPeople;
  }
}
