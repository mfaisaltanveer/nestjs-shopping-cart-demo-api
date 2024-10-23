import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'User Id',
    example: '1',
  })
  userId: number;

  @ApiProperty({
    description: 'The ProductId for the product',
    example: 1,
  })
  productId: number;

  @ApiProperty({
    description: 'The totalPrice of the product',
    example: 1500,
  })
  totalPrice: number;

  @ApiProperty({
    description: 'Order status',
    example: 'In-progress',
  })
  status: string;
}