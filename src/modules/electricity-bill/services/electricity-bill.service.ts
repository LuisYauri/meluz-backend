import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ElectricityBillRepository } from '../repositories/electricity-bill.repository';
import { CreateElectricityBillDto } from '../dto/create-electricity-bill.dto';

@Injectable()
export class ElectricityBillService {
  constructor(
    @InjectRepository(ElectricityBillRepository)
    private electricityBillRepository: ElectricityBillRepository,
  ) {
  }

  async getListElectricityBill() {
    return this.electricityBillRepository.find();
  }

  async createElectricityBill(createElectricityBillDto: CreateElectricityBillDto) {
    await this.electricityBillRepository.save(createElectricityBillDto);
    return createElectricityBillDto;
  }

  async deleteElectricityBill(
    id: number,
  ) {
    const result = await this.electricityBillRepository.delete({ id });
    if (result.affected === 0) {
      throw  new NotFoundException(`Task with ID ${id} not found`);
    }
    return { message: 'Eliminación exitoso' };
  }
}
