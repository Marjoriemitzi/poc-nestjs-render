import { Module } from '@nestjs/common';
import { StripService } from './strip.service';
import { StripController } from './strip.controller';

@Module({
  providers: [StripService],
  controllers: [StripController]
})
export class StripModule {}
