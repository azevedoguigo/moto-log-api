import { IsNotEmpty, Length } from 'class-validator';

export class UpdateLogDto {
  fuel: number;

  maintenance: number;

  finalMileage: number;

  finished?: boolean;

  @IsNotEmpty()
  @Length(7)
  motorcyclePlate: string;
}
