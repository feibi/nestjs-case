import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class CatsService {
  constructor(private readonly redisService: RedisService) {}
  async getRedis(): Promise<Redis> {
    const client = await this.redisService.getClient('NEST_SERVICE');
    return client;
  }
}
