import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'faisal',
  })
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'faisal123',
  })
  password: string;
}
