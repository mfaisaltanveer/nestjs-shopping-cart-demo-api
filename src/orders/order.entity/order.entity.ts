import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../../users/user.entity/user.entity';
import { Product } from '../../products/product.entity/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column('decimal')
  totalPrice: number;

  @Column()
  status: string;
}
