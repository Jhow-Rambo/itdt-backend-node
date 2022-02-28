import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ICountPeople } from '@modules/count_people/domain/models/ICountPeople';
import Toten from '../../../../totens/infra/typeorm/entities/Toten';

@Entity('count_people')
class CountPeople implements ICountPeople {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  in: number;

  @Column()
  out: number;

  @Column()
  date: Date;

  @Column()
  field_image: string;

  @Column()
  totenId: string;

  @ManyToOne(() => Toten, toten => toten.countPeople, {
    onDelete: 'CASCADE',
  })
  toten: Toten;
}

export default CountPeople;
