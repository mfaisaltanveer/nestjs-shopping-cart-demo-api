import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity'; // User entity
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register the repository
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export if needed in other modules
})
export class UsersModule {}
