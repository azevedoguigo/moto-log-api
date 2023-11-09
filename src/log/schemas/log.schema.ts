import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema({ timestamps: true })
export class Log {
  @Prop({ default: 0 })
  fuel: number;

  @Prop({ default: 0 })
  maintenance: number;

  @Prop({ default: 0 })
  initialMileage: number;

  @Prop({ default: 0 })
  finalMileage: number;

  @Prop({ default: false })
  finished?: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Motorcycle' })
  motorcycleId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
