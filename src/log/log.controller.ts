import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createLogDto: CreateLogDto) {
    return await this.logService.create(createLogDto);
  }

  @Get(':motoId')
  @UseGuards(AuthGuard)
  async findAll(@Param('motoId') motoId: string) {
    return await this.logService.findAll(motoId);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() updateLogDto: UpdateLogDto) {
    return await this.logService.update(id, updateLogDto);
  }
}
