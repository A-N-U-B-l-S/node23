import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./user.entity";
import { Category } from "./category.entity";

@Entity('blogs')
export class Blog {
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

  @ManyToOne(() => User, (user: User) => user.blogs)
  @JoinColumn({name: 'user_id'})
  user: User;

  @ManyToOne(() => Category, (category: Category) => category.blogs)
  @JoinColumn({name: 'category_id'})
  category: Category;
}