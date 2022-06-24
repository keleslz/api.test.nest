import { Injectable } from '@nestjs/common';
import { ICreateDto } from 'src/core/domain/dto/i-create-dto';
import { IUpdateDto } from 'src/core/domain/dto/i-update-dto';
import { ICrudService } from 'src/core/domain/services/i-crud-service';
import { CreateCatUseCase } from './use-cases/create-cat-use-case';
import { DeleteCatUseCase } from './use-cases/delete-cat-use-case';
import { GetAllCatUseCase } from './use-cases/get-all-cat-use-case';
import { GetOneCatUseCase } from './use-cases/get-one-cat-use-case';
import { UpdateCatUseCase } from './use-cases/update-cat-use-case';

@Injectable()
export class CatService implements ICrudService {
  constructor(
    private readonly createCatUseCase: CreateCatUseCase,
    private readonly updateCatUseCase: UpdateCatUseCase,
    private readonly deleteCatUseCase: DeleteCatUseCase,
    private readonly getOneCatUseCase: GetOneCatUseCase,
    private readonly getAllCatUseCase: GetAllCatUseCase,
  ) {}
  public create(createDto: ICreateDto): void {
    this.createCatUseCase.execute(createDto);
  }

  public update(id: string, updateDto: IUpdateDto): void {
    this.updateCatUseCase.execute(id, updateDto);
  }

  public findAll() {
    this.getAllCatUseCase.execute();
  }

  public findOne(id: string) {
    this.getOneCatUseCase.execute(id);
  }

  public remove(id: string) {
    this.deleteCatUseCase.execute(id);
  }
}
