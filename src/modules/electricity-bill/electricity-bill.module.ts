import { Module } from '@nestjs/common';
import { ElectricityBillController } from './controllers/electricity-bill.controller';
import { ElectricityBillService } from './services/electricity-bill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectricityBillRepository } from './repositories/electricity-bill.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ElectricityBillRepository]),
  ],
  controllers: [ElectricityBillController],
  providers: [ElectricityBillService],
})
export class ElectricityBillModule {
}
