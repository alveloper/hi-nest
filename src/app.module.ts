import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 아래 function은 decorator
// Nest JS는 데코레이터와 함께 한다
// 왜냐면 데코레이터는 클래스에 함수 기능을 추가할 수 있기 때문이다
// 클래스 위의 함수이고, 클래스를 위해 움직인다고 생각하면 된다
@Module({
  imports: [],
  controllers: [AppController],
  // 컨트롤러가 하는 일은 기본적으로 url을 가져오고 함수를 실행
  // express의 라우터 같은 역할을 한다
  providers: [AppService],
  //
})
export class AppModule {}
// Appmodule은 모든 것의 루트 모듈 같은 느낌
// 모듈은 어플리케이션의 일부분. 한 가지 역할을 하는 앱이다.
// 인증을 담당하는 어플리케이션이 있다면 유저 모듈 등...
