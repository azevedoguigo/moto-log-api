import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { CreateMotorcycleDto } from './dto/create-motorcycle.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('motorcycle')
export class MotorcycleController {
  constructor(private readonly motorcycleService: MotorcycleService) {}

  @Post()
  create(@Body() createMotorcycleDto: CreateMotorcycleDto) {
    return this.motorcycleService.create(createMotorcycleDto);
  }

  @Get()
  findAll() {
    return this.motorcycleService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') motorcycleId: string) {
    return await this.motorcycleService.findOne(motorcycleId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motorcycleService.remove(+id);
  }
}
