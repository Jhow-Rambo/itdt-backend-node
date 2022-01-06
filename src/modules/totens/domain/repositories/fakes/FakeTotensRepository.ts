import { v4 as uuid } from 'uuid';
import { ICreateToten } from '@modules/totens/domain/models/ICreateToten';
import { ITotenRepository } from '@modules/totens/domain/repositories/ITotenRepository';
import { Toten } from '../../../infra/typeorm/entities/Toten';
import { IToten } from '../../models/IToten';

export class FakeTotensRepository implements ITotenRepository {
  private totens: Toten[] = [];

  public async create(data: ICreateToten): Promise<IToten> {
    const toten = new Toten();

    toten.id = uuid();
    toten.name = data.name;
    toten.description = data.description;
    toten.localization = data.localization;

    this.totens.push(toten);

    return toten;
  }

  public async findAll(): Promise<IToten[]> {
    return this.totens;
  }

  public async findByName(name: string): Promise<IToten | undefined> {
    const toten = this.totens.find(toten => toten.name === name);

    return toten;
  }

  public async delete(id: string): Promise<void> {
    const totenIndex = this.totens.findIndex(toten => toten.id === id);

    this.totens.splice(totenIndex, 1);
  }
}
