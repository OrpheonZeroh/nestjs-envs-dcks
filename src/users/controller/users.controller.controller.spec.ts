import { Test, TestingModule } from '@nestjs/testing';
import { Users.ControllerController } from './users.controller.controller';

describe('Users.ControllerController', () => {
  let controller: Users.ControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Users.ControllerController],
    }).compile();

    controller = module.get<Users.ControllerController>(Users.ControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
