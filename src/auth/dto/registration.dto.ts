import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegistrationDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}
