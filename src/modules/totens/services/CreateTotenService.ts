import { ICreateToten } from '../domain/models/ICreateToten';
import { IToten } from '../domain/models/IToten';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITotenRepository } from '../domain/repositories/ITotenRepository';

@injectable()
class CreateTotenService {
  constructor(
    @inject('TotenRepository')
    private totensRepository: ITotenRepository,
  ) {}

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
