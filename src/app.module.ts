import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffesController } from './coffees/coffees.controller';
import { CoffesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, CoffesController],
  providers: [AppService, CoffesService],
})
export class AppModule {}
