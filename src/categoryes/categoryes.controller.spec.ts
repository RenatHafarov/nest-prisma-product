import { Test, TestingModule } from '@nestjs/testing';
import { CategoryesController } from './categoryes.controller';

describe('CategoryesController', () => {
  let controller: CategoryesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryesController],
    }).compile();

    controller = module.get<CategoryesController>(CategoryesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
