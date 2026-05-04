import { Test, TestingModule } from '@nestjs/testing';
import { StripService } from './strip.service';

describe('StripService', () => {
  let service: StripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StripService],
    }).compile();

    service = module.get<StripService>(StripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
