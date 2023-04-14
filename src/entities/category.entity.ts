import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity('categories')
export class Category {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @CreateDateColumn()
  created_at:Date;

  @UpdateDateColumn()
  update_at:Date;

}
