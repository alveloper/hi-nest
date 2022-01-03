import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller() = express.js의 controller/router 비슷
// contorller 에는 모든 url을 다 넣어놓고,
// 서비스는 필요하다면 데이터베이스에 연락한다. (app.service.ts)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 데코레이터 Get (= exporess 의 Get router)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
  // sayHello(): string {
  //   return 'Hello everyone!';
  // }
  // Next JS는 Get('/hello') 컨트롤러 덕분에
  // 누군가 /hello로 들어오면 sayHello() 함수를 실행해야 하는 것을 알고 있다.
  // 데코레이터는 항상 꾸며주는 함수나 클래스와 꼭 붙어있어야 한다. (빈칸 x)
  // 데코레이터는 url을 갖고 와서 함수로 매핑한다.
  // 그럼 해당 url이 그 함수를 실행한다.
}
