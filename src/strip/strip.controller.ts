import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { StripService } from './strip.service';

@Controller('strips') // A rota base será /strips
export class StripController {
  constructor(private readonly stripService: StripService) {}

  // Rota para pegar os detalhes da tirinha: GET /strips/123
  @Get(':id')
  getStripDetails(@Param('id') id: string) {
    return this.stripService.findOne(id);
  }

  // Rota para salvar a pintura do quadrinho: POST /strips/123/progress
  @Post(':id/progress')
  saveProgress(@Param('id') id: string, @Body() progressData: any) {
    return this.stripService.updateProgress(id, progressData);
  }
}