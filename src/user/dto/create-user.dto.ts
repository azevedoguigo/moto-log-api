import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 50)
  @IsNotEmpty()
  name: string;

  @Length(6, 40)
  @IsEmail()
  email: string;

  @Length(6, 30)
  @IsNotEmpty()
  password: string;
}
