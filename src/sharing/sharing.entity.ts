import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  JoinTable,
} from 'typeorm';

@Entity('t_sharing', { database: 'sharing_2', schema: 't_sharing' })
export class SharingEntity {
  @PrimaryGeneratedColumn({ name: 'sharing_id' })
  id: number;

  @Column()
  name: string;

  @Column({ name: 'city_id' })
  cityId: number;

  @Column({ name: 'config_data' })
  configData: string;
}
