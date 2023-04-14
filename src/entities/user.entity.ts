import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
