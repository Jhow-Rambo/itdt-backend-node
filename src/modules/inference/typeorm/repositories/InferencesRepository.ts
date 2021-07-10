import { EntityRepository, Repository } from 'typeorm';
import Inference from '../entities/Inference';

@EntityRepository(Inference)
export class InferenceRepository extends Repository<Inference> {
  public async findByName(name: string): Promise<Inference | undefined> {
    const inference = this.findOne({
      where: {
        name,
      },
    });

    return inference;
  }
}
