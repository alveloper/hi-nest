import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Nest js 에는 항상 main.ts 파일이 있어야 한다.
// Next js 어플리케이션은 main.ts로 시작한다.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // 어플리케이션은 3000번 포트를 리스닝
}
bootstrap();
