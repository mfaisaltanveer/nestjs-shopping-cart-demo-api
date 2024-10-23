import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
// import { User } from '../users/user.entity/user.entity';
// import { Product } from '../products/product.entity/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.ordersRepository.create(createOrderDto);
    return this.ordersRepository.save(order);
  }

  async getAllOrders(): Promise<Order[]> {
    return this.ordersRepository.find();
  }
}
