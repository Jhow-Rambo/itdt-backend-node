import { inject, injectable } from 'tsyringe';
import { ICreateFauna } from '../domain/models/ICreateFauna';
import { IFauna } from '../domain/models/IFauna';
import { IFaunaRepository } from '../domain/repositories/IFaunaRepository';

@injectable()
class CreatFaunaService {
  constructor(
    @inject('FaunaRepository')
    private inferenceRepository: IFaunaRepository,
  ) {}

  public async execute(data: ICreateFauna): Promise<IFauna> {
    const Fauna = await this.inferenceRepository.create(data);

    return Fauna;
  }
}

export default CreatFaunaService;
