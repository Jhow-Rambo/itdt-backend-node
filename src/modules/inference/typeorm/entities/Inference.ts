import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inferences')
class Inference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  normal_image: string;

  @Column()
  inferred_image: string;

  @Column()
  inference: string;

  @Column()
  created_at: string;
}

export default Inference;
