import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { CreateMotorcycleDto } from './dto/create-motorcycle.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('motorcycle')
export class MotorcycleController {
  constructor(private readonly motorcycleService: MotorcycleService) {}

  @Post()
  async create(@Body() createMotorcycleDto: CreateMotorcycleDto) {
    return await this.motorcycleService.create(createMotorcycleDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') motorcycleId: string) {
    return await this.motorcycleService.findOne(motorcycleId);
  }
}
