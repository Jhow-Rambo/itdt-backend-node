import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('count_people')
class CountPeople {
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
