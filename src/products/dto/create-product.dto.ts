import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Laptop',
  })
  name: string;

  @ApiProperty({
    description: 'The description of the product',
    example: 'A high-end gaming laptop',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 1500,
  })
  price: number;

  @ApiProperty({
    description: 'Stock available for the product',
    example: 10,
  })
  stock: number;
}
