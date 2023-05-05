import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Blog } from "./blog.entity";
import { Post } from "@nestjs/common";
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

  @OneToMany(() => Blog, (blog: Blog) => blog.user)
  blogs: Blog[];
}
