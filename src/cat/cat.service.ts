import { Injectable } from '@nestjs/common';
import { ICrudService } from 'src/domain/services/i.crud.service';
import { CreateCatUseCase } from './use-cases/create.cat.use.case';
import { DeleteCatUseCase } from './use-cases/delete.cat.use.case';
import { GetOneCatUseCase } from './use-cases/get.one.cat.use.case';
import { UpdateCatUseCase } from './use-cases/update.cat.use.case';

@Injectable()
export class CatService implements ICrudService {
  constructor(
    private readonly createCatUseCase: CreateCatUseCase,
    private readonly updateCatUseCase: UpdateCatUseCase,
    private readonly deleteCatUseCase: DeleteCatUseCase,
    private readonly getOneCatUseCase: GetOneCatUseCase,
  ) {}

  public create() {
    this.createCatUseCase.execute();
  }

  public findAll() {
    this.getOneCatUseCase.execute();
  }

  public findOne() {
    this.getOneCatUseCase.execute();
  }

  public update() {
    this.updateCatUseCase.execute();
  }

  public remove() {
    this.deleteCatUseCase.execute();
  }
}
