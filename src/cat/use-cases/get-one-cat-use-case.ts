import { Injectable } from '@nestjs/common';
import { Cat } from 'src/core/data/models/entities/cat';
import { IUseCase } from 'src/core/domain/use-cases/i-use-case';

@Injectable()
export class GetOneCatUseCase implements IUseCase<Cat> {
  execute(id: string) {
    return new Cat();
  }
}
