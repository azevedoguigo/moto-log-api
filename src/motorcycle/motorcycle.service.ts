import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotorcycleDto } from './dto/create-motorcycle.dto';
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

  async findOne(motorcycleId: string) {
    const motorcycle = await this.motorcycleModel.findById(motorcycleId);

    if (!motorcycle) throw new NotFoundException('Motorcycle does not exists!');

    return motorcycle;
  }

  remove(id: number) {
    return `This action removes a #${id} motorcycle`;
  }
}
