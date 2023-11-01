import { Test, TestingModule } from '@nestjs/testing';
import { CategoryesService } from './categoryes.service';

describe('CategoryesService', () => {
  let service: CategoryesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryesService],
    }).compile();

    service = module.get<CategoryesService>(CategoryesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
