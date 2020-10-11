import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ElectricityBill extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  date: Date;

  @Column('double')
  quantityKwPrevious: number;

  @Column('double')
  quantityKwCurrent: number;

  @Column('double')
  quantityKwResult: number;

  @Column('double')
  price: number;

  @Column('double')
  amount: number;
}
