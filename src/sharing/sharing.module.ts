import { SharingEntity } from './sharing.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharingService } from './sharing.service';
import { SharingController } from './sharing.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SharingEntity])],
  providers: [SharingService],
  controllers: [SharingController],
})
export class SharingModule {}
