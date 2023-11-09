import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const chassisNumberAlreadyRegistred = await this.motorcycleModel.findOne({
      chassisNumber: createMotorcycleDto.chassisNumber,
    });

    if (chassisNumberAlreadyRegistred)
      throw new BadRequestException('Chassis number already registred!');

    const plateAreadyRegistred = await this.motorcycleModel.findOne({
      plate: createMotorcycleDto.plate,
    });

    if (plateAreadyRegistred)
      throw new BadRequestException('Plate already registred!');

    const createdMotorcycle = this.motorcycleModel.create(createMotorcycleDto);
    return createdMotorcycle;
  }

  async findOne(motorcycleId: string) {
    const motorcycle = await this.motorcycleModel.findById(motorcycleId);

    if (!motorcycle) throw new NotFoundException('Motorcycle does not exists!');

    return motorcycle;
  }
}
