import { EntityRepository, Repository } from 'typeorm';
import { ElectricityBill } from '../entities/electricity-bill.entity';
import { CreateElectricityBillDto } from '../dto/create-electricity-bill.dto';

@EntityRepository(ElectricityBill)
export class ElectricityBillRepository extends Repository<ElectricityBill> {
  async createElectricityBill(createElectricityBillDto: CreateElectricityBillDto) {
    // const electricityBill = new ElectricityBill();
    // electricityBill.datePrevious = createElectricityBillDto.datePrevious;
    // electricityBill.dateCurrent = createElectricityBillDto.dateCurrent;
    // electricityBill.amount = createElectricityBillDto.amount;
    // electricityBill.quantityKw = createElectricityBillDto.quantityKw;
    // electricityBill.user = null;
    // await electricityBill.save();
    // let electricityBill = new ElectricityBill();
    // electricityBill = createElectricityBillDto;
  }
}
