import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffesController } from './coffees.controller';
import { CoffesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffesController],
  providers: [CoffesService],
})
export class CoffeesModule {}
