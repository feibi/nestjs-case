import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SharingEntity } from './sharing.entity';

@Injectable()
export class SharingService {
  constructor(
    @InjectRepository(SharingEntity)
    private readonly sharingRep: Repository<SharingEntity>,
  ) {}

  async findById(id: string): Promise<SharingEntity> {
    return await this.sharingRep.findOne(id);
  }
}
