import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const emailAlreadyRegistred = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (emailAlreadyRegistred)
      throw new BadRequestException('Email already registred!');

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const createdUser = this.userModel.create(createUserDto);
    return (await createdUser).save();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) throw new NotFoundException('User does not exists!');

    return user;
  }
}
