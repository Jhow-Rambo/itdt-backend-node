import { inject, injectable } from 'tsyringe';
import { IFauna } from '../domain/models/IFauna';
import { IFaunaRepository } from '../domain/repositories/IFaunaRepository';

@injectable()
class ListFaunaService {
  constructor(
    @inject('FaunaRepository')
    private inferenceRepository: IFaunaRepository,
  ) {}

  public async execute(): Promise<IFauna[] | undefined> {
    const fauna = this.inferenceRepository.findAll();

    return fauna;
  }
}

export default ListFaunaService;
