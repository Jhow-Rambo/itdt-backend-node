import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ITotenRepository } from '../domain/repositories/ITotenRepository';

@injectable()
class DeleteTotenService {
  constructor(
    @inject('TotenRepository')
    private totensRepository: ITotenRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const toten = await this.totensRepository.findById(id);

    if (!toten) {
      throw new AppError('Toten not found');
    }

    await this.totensRepository.delete(id);
  }
}

export default DeleteTotenService;
