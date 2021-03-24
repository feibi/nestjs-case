import {
  Controller,
  Inject,
  Get,
  Logger,
  LoggerService,
  Param,
} from '@nestjs/common';
import { CatsService } from './cats.service';
@Controller('cats')
export class CatsController {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly catsService: CatsService,
  ) {}
  @Get(':id')
  async findOne(@Param('id') id): Promise<string> {
    const redis = await this.catsService.getRedis();
    const test = await redis.get('test');
    const token = await redis.get('TOKEN');

    this.logger.log(`token:${token}`);

    return `This action returns a #${token} cat`;
  }
}
