import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Market {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  slug!: string;

  @Column({ type: 'varchar', length: 255 })
  tag!: string;

  @Column({ type: 'text' })
  shortDescription!: string;

  @Column({ type: 'longtext' })
  fullDescription!: string;

  @Column({ type: 'varchar', length: 50 })
  yieldRate!: string;

  @Column({ type: 'varchar', length: 50 })
  appreciationRate!: string;

  @Column({ type: 'varchar', length: 500 })
  imageUrl!: string;

  @Column({ type: 'float' })
  mapLat!: number;

  @Column({ type: 'float' })
  mapLng!: number;

  @Column({ type: 'int', default: 6 })
  mapZoom!: number;

  @Column({ type: 'json', nullable: true })
  pins!: { city: string; lat: number; lng: number }[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}