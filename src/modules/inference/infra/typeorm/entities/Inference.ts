import Toten from '../../../../totens/infra/typeorm/entities/Toten';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('inferences')
class Inference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totenId: string;

  @Column()
  normal_image: string;

  @Column()
  inferred_image: string;

  @ManyToOne(() => Toten, toten => toten.inferences, {
    onDelete: 'CASCADE',
  })
  toten: Toten;

  @Column()
  inference: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Inference;
