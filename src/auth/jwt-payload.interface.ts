// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
  username: string;
  sub: number; // typically user ID
}
