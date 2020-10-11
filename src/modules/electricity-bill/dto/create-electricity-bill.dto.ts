import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';


export class CreateElectricityBillDto {
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  quantityKwPrevious: number;

  @IsNotEmpty()
  @IsNumber()
  quantityKwCurrent: number;

  @IsNotEmpty()
  @IsNumber()
  quantityKwResult: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

}
