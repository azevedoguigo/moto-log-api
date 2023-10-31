import { IsNotEmpty } from 'class-validator';

export class CreateMotorcycleDto {
  @IsNotEmpty()
  manufacturer: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  chassisNumber: string;

  @IsNotEmpty()
  plate: string;

  @IsNotEmpty()
  ownerID: string;
}
