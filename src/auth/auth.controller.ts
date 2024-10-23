// src/auth/auth.controller.ts
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Login should not be guarded with JwtAuthGuard
  @Post('login')
  @ApiOperation({ summary: 'Log in a user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'faisal' },
        password: { type: 'string', example: 'faisal123' },
      },
    },
  })
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
}
