import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  create(@Body() createLogDto: CreateLogDto) {
    return this.logService.create(createLogDto);
  }

  @Get()
  findAll() {
    return this.logService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLogDto: UpdateLogDto) {
    return await this.logService.update(id, updateLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logService.remove(+id);
  }
}
