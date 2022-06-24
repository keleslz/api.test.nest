import { Injectable } from '@nestjs/common';
import { ICreateDto } from 'src/domain/dto/i-create-dto';
import { IUpdateDto } from 'src/domain/dto/i-update-dto';
import { ICrudService } from 'src/domain/services/i-crud-service';
import { CreateCatUseCase } from './use-cases/create-cat-use-case';
import { DeleteCatUseCase } from './use-cases/delete.cat-use-case';
import { GetOneCatUseCase } from './use-cases/get.one.cat-use-case';
import { UpdateCatUseCase } from './use-cases/update.cat-use-case';

@Injectable()
export class CatService implements ICrudService {
  constructor(
    private readonly createCatUseCase: CreateCatUseCase,
    private readonly updateCatUseCase: UpdateCatUseCase,
    private readonly deleteCatUseCase: DeleteCatUseCase,
    private readonly getOneCatUseCase: GetOneCatUseCase,
  ) {}
  public create(createDto: ICreateDto): void {
    this.createCatUseCase.execute(createDto);
  }

  public update(id: string, updateDto: IUpdateDto): void {
    this.updateCatUseCase.execute(id, updateDto);
  }

  public findAll() {
    this.getOneCatUseCase.execute();
  }

  public findOne() {
    this.getOneCatUseCase.execute();
  }

  public remove() {
    this.deleteCatUseCase.execute();
  }
}
