import { ICreateToten } from '../domain/models/ICreateToten';
import { IToten } from '../domain/models/IToten';
import { FakeTotensRepository } from '@modules/totens/domain/repositories/fakes/FakeTotensRepository';
import AppError from '@shared/errors/AppError';

class CreateTotenService {
  constructor(private totensRepository: FakeTotensRepository) {}

  public async execute(data: ICreateToten): Promise<IToten> {
    const totenExists = await this.totensRepository.findByName(data.name);

    if (totenExists) {
      throw new AppError('Toten with the same name already exists');
    }
    const toten = await this.totensRepository.create(data);

    return toten;
  }
}

export default CreateTotenService;
