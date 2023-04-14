import { IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

export class UpdateUserDto{

  @IsOptional()
  first_name?:string;

  @IsOptional()
  last_name?:string;
}