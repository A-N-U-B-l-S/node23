import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Blog } from "./blog.entity";


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

  @OneToMany(() => Blog, (blog: Blog) => blog.category)
  blogs: Blog[];
}
