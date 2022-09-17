import { Module } from '@nestjs/common';
import { CoffesController } from './coffees.controller';
import { CoffesService } from './coffees.service';

@Module({
  controllers: [CoffesController],
  providers: [CoffesService],
})
export class CoffeesModule {}
