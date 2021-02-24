import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class ColorPaletteEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paletteName: string;

  @Column({
    type: 'jsonb',
    array: false,
    nullable: false,
  })
  colors: any[];

  @Column()
  description: string;
}
