import { Test, TestingModule } from '@nestjs/testing';
import { GptWrapperController } from './gpt-wrapper.controller';

describe('GptWrapperController', () => {
  let controller: GptWrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptWrapperController],
    }).compile();

    controller = module.get<GptWrapperController>(GptWrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
