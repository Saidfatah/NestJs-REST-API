import { IsArray, IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  readonly id: number;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];

  @IsString()
  readonly name: string;
}
