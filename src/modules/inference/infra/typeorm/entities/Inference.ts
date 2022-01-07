import Toten from '../../../../totens/infra/typeorm/entities/Toten';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('inferences')
class Inference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  normal_image: string;

  @Column()
  inferred_image: string;

  @ManyToOne(() => Inference, inference => inference.toten, {
    onDelete: 'CASCADE',
  })
  toten: Toten;

  @Column()
  inference: string;

  @Column()
  created_at: string;
}

export default Inference;
