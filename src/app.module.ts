import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffesController } from './coffes/coffes.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffesController],
  providers: [AppService],
})
export class AppModule {}
