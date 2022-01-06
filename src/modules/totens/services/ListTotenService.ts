import { IToten } from '../domain/models/IToten';
import { FakeTotensRepository } from '../domain/repositories/fakes/FakeTotensRepository';

export class ListTotenService {
  constructor(private totensRepository: FakeTotensRepository) {}

  public async execute(): Promise<IToten[]> {
    const totens = await this.totensRepository.findAll();

    return totens;
  }
}
