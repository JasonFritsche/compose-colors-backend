import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public username: string;

  @Column()
  public password: string;
}
