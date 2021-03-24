import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { SharingEntity } from '../sharing/sharing.entity';

@Entity({ database: 'sharing_2', schema: 't_58_product', name: 't_58_product' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sharing_id: number;

  @ManyToOne(() => SharingEntity)
  @JoinColumn({ name: 'sharing_id', referencedColumnName: 'id' })
  sharing: SharingEntity;

  // @Transform(role => role.name)
  // sh:SharingEntity;

  @Column({ name: 'serial_number' })
  serial_number: string;

  //   @Column('int', { name: 'contact_name' })
  //   status: number;

  //   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  //   create_time: Date;
}
