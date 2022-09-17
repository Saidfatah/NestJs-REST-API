import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly flavors: string[];

  @IsString({ each: true })
  readonly name: string;
}
