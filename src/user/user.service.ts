import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { UserEntity } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  // : Promise<UserEntity[]>
  async findAll() {
    const page = 1;
    const pageSize = 10;
    const result = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.id', 'id')
      .addSelect('user.sharing_id', 'sharingId')
      .addSelect('user.serial_number', 'serialNumber')
      .addSelect('sharing.name', 'sharingName')
      .innerJoin('user.sharing', 'sharing')
      .limit(pageSize)
      .offset(page * pageSize)
      .getRawMany();

    // const total = result.getCount();
    return {
      result,
      // total,
    };
  }
}
