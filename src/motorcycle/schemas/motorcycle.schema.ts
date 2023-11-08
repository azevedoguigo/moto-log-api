import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const MotorcycleSchema = SchemaFactory.createForClass(Motorcycle);
