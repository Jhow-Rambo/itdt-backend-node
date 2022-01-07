import { inject, injectable } from 'tsyringe';
import { IToten } from '../domain/models/IToten';
import { ITotenRepository } from '../domain/repositories/ITotenRepository';

@injectable()
class ListTotenService {
  constructor(
    @inject('TotenRepository')
    private totensRepository: ITotenRepository,
  ) {}

  public async execute(): Promise<IToten[]> {
    const totens = await this.totensRepository.findAll();

    return totens;
  }
}

export default ListTotenService;
