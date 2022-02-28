import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICountPeople } from '@modules/count_people/domain/models/ICountPeople';

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
  toten_id: string;
}

export default CountPeople;
