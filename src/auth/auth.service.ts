import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import * as bcrypt from 'bcrypt';
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService){
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User with this email does not exist.");
    }

    if(!(await bcrypt.compare(password, user.password))){
      throw new BadRequestException("incorrect password.");
    }

    const payload = {
      "email": user.email,
      "sub": user.email
    }
    const accessToken = this.jwtService.sign(payload);

    return accessToken;
  }

}