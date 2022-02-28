import Inference from '../../../../inference/infra/typeorm/entities/Inference';
import { IToten } from '@modules/totens/domain/models/IToten';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import CountPeople from '../../../../count_people/infra/typeorm/entities/CountPeople';

@Entity('totens')
class Toten implements IToten {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  localization: string;

  @OneToMany(() => Inference, inference => inference.toten, {
    eager: true,
    onDelete: 'CASCADE',
  })
  inferences: Inference[];

  @OneToMany(() => CountPeople, countPeople => countPeople.toten, {
    eager: true,
    onDelete: 'CASCADE',
  })
  countPeople: CountPeople[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Toten;
