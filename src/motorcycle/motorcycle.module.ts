import { Module } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { MotorcycleController } from './motorcycle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Motorcycle, MotorcycleSchema } from './schemas/motorcycle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Motorcycle.name, schema: MotorcycleSchema },
    ]),
  ],
  controllers: [MotorcycleController],
  providers: [MotorcycleService],
})
export class MotorcycleModule {}
