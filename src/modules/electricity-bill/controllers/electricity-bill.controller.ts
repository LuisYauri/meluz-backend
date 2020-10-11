import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateElectricityBillDto } from '../dto/create-electricity-bill.dto';
import { ElectricityBillService } from '../services/electricity-bill.service';
import { ElectricityBill } from '../entities/electricity-bill.entity';

@Controller('electricity-bill')
export class ElectricityBillController {

  constructor(private electricityBillService: ElectricityBillService) {
  }

  @Get()
  getListElectricityBill() {
    return this.electricityBillService.getListElectricityBill();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createElectricityBill(
    @Body() createElectricityBillDto: CreateElectricityBillDto,
  ) {
    return this.electricityBillService.createElectricityBill(createElectricityBillDto);
  }

  @Delete('/:id')
  deleteElectricityBill(
    @Param('id', ParseIntPipe) id: number,
  ){
    return this.electricityBillService.deleteElectricityBill(id);
  }
}
