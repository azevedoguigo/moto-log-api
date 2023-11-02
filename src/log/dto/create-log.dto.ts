import { IsNotEmpty, Length } from 'class-validator';

export class CreateLogDto {
  fuel: number;

  maintenance: number;

  @IsNotEmpty()
  initialMileage: number;

  finalMileage: number;

  finished?: boolean;

  @IsNotEmpty()
  @Length(7)
  motorcyclePlate: string;
}
