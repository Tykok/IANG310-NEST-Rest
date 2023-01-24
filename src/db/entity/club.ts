import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  ville: string;
  
  @Column('text')
  pays: string;
  
  @Column('text')
  stade: string;
  
  @Column('text')
  logo: string;
  
  @Column('text')
  isActive?: boolean;
}