import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity() // 'coffes' specify a certain name fo the sql table , bu tby default it just uses lowercased class name
export class Coffee {
  @PrimaryColumn()
  id?: number;

  @Column()
  brand?: string;

  @Column('json', { nullable: true })
  flavors?: string[];

  @Column()
  name?: string;
}
