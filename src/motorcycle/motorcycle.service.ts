import { Injectable } from '@nestjs/common';
import { CreateMotorcycleDto } from './dto/create-motorcycle.dto';
import { UpdateMotorcycleDto } from './dto/update-motorcycle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Motorcycle } from './schemas/motorcycle.schema';
import { Model } from 'mongoose';

@Injectable()
export class MotorcycleService {
  constructor(
    @InjectModel(Motorcycle.name) private motorcycleModel: Model<Motorcycle>,
  ) {}

  async create(createMotorcycleDto: CreateMotorcycleDto): Promise<Motorcycle> {
    const createdMotorcycle = this.motorcycleModel.create(createMotorcycleDto);
    return createdMotorcycle;
  }

  findAll() {
    return `This action returns all motorcycle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} motorcycle`;
  }

  update(id: number, updateMotorcycleDto: UpdateMotorcycleDto) {
    return `This action updates a #${id} motorcycle`;
  }

  remove(id: number) {
    return `This action removes a #${id} motorcycle`;
  }
}
