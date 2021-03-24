import { Module, Logger } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserModule } from './user/user.module';
import { SharingModule } from './sharing/sharing.module';
import { TaskService } from './task/task.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    // https://github.com/skunight/nestjs-redis
    RedisModule.register({
      name: 'NEST_SERVICE',
      url: 'redis://localhost:6379',
    }),
    // 必须有一个name为default或无name
    TypeOrmModule.forRoot({ name: 'default' }),
    TypeOrmModule.forRoot({ name: 'sharing' }),
    ScheduleModule.forRoot(),
    UserModule,
    SharingModule,
  ],
  controllers: [AppController, CatsController],
  providers: [Logger, AppService, TaskService, CatsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
