import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('club')
export class Club {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  @Column({ name: 'ville', type: 'text', nullable: false })
  ville: string;

  @Column({ name: 'pays', type: 'text', nullable: false })
  pays: string;

  @Column({ name: 'stade', type: 'text', nullable: false })
  stade: string;

  @Column({ name: 'logo', type: 'text', nullable: false })
  logo: string;

  @Column({ name: 'is_active', type: 'text', nullable: true })
  isActive?: boolean;
}
