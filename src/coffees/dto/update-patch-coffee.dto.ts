import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdatePatchCoffeeDto extends PartialType(CreateCoffeeDto) {}
