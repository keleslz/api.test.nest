import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CreateCatUseCase } from './use-cases/create-cat-use-case';
import { DeleteCatUseCase } from './use-cases/delete-cat-use-case';
import { GetAllCatUseCase } from './use-cases/get-all-cat-use-case';
import { GetOneCatUseCase } from './use-cases/get-one-cat-use-case';
import { UpdateCatUseCase } from './use-cases/update-cat-use-case';

import { ICRUDRepository } from '../core/data/repositories/i-crud-repository';
import { IUseCase } from 'src/core/domain/use-cases/i-use-case';
import { CatRepository } from 'src/data/CatRepository';

const useCases= [
  CreateCatUseCase,
  UpdateCatUseCase,
  DeleteCatUseCase,
  GetOneCatUseCase,
  GetAllCatUseCase,
] ;

const repositories = [
  CatRepository
]

@Module({
  controllers: [CatController],
  providers: [CatService, ...useCases, ...repositories],
})
export class CatModule {}
