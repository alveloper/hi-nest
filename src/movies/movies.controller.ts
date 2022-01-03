import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

// @Controller('movies') 에서
// 괄호 안이 url의 엔트리 포인트를 컨트롤
// 그래서 시작을 localhost:3000/movies 로 들어가야 한다.
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies.';
  }

  // @Param('id') 를 사용함으로써
  // Nest js 는 내가 url에 있는 id parameter를 알길 원한단 것을 확인
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return a single movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // 리소스의 일부분만 업데이트하려면 Patch
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will update a movie with the id: ${movieId}`;
  }
}
