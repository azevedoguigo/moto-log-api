import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from './schemas/log.schema';
import { Model } from 'mongoose';
import { Motorcycle } from 'src/motorcycle/schemas/motorcycle.schema';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name) private logModel: Model<Log>,
    @InjectModel(Motorcycle.name) private motorcycleModel: Model<Motorcycle>,
  ) {}

  async create(createLogDto: CreateLogDto) {
    const motorcycle = await this.motorcycleModel.findOne({
      plate: createLogDto.motorcyclePlate,
    });

    if (!motorcycle) throw new NotFoundException('Motorcycle not registred!');

    const createdLog = this.logModel.create(createLogDto);
    return (await createdLog).save();
  }

  findAll() {
    return `This action returns all log`;
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  async update(id: string, updateLogDto: UpdateLogDto) {
    const motorcycle = await this.motorcycleModel.findOne({
      plate: updateLogDto.motorcyclePlate,
    });

    if (!motorcycle) throw new NotFoundException('Motorcycle not registred!');

    const updatedLog = await this.logModel.findOneAndUpdate(updateLogDto);

    return await updatedLog.save();
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
