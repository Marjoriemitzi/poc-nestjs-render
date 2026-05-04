import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripModule } from './strip/strip.module';

@Module({
  imports: [StripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
