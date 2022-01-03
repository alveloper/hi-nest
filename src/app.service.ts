import { Injectable } from '@nestjs/common';

// app.services.ts는 비즈니스 로직을 실행하는 역할

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'Hi Nest!';
  }
}
