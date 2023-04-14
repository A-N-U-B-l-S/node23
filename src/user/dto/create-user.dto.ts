import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto{

  @IsNotEmpty()
  first_name:string;

  @IsNotEmpty()
  last_name:string;

  @IsNotEmpty()
  @IsEmail()
  email:string;

  @IsNotEmpty()
  @Length(8,30)
  password:string;


}