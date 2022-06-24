import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CreateCatUseCase } from './use-cases/create-cat-use-case';
import { DeleteCatUseCase } from './use-cases/delete.cat-use-case';
import { GetOneCatUseCase } from './use-cases/get.one.cat-use-case';
import { UpdateCatUseCase } from './use-cases/update.cat-use-case';

const useCases = [
  CreateCatUseCase,
  UpdateCatUseCase,
  DeleteCatUseCase,
  GetOneCatUseCase,
];

@Module({
  controllers: [CatController],
  providers: [CatService, ...useCases],
})
export class CatModule {}
