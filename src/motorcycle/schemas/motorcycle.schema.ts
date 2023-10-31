import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MotorcycleDocument = HydratedDocument<Motorcycle>;

@Schema({ timestamps: true })
export class Motorcycle {
  @Prop()
  manufacturer: string;

  @Prop()
  model: string;

  @Prop()
  color: string;

  @Prop()
  chassisNumber: string;

  @Prop()
  plate: string;

  @Prop()
  ownerID: string;
}

export const MotorcycleSchema = SchemaFactory.createForClass(Motorcycle);
