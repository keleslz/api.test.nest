import { Injectable } from '@nestjs/common';
import { IUseCase } from 'src/core/domain/use-cases/i-use-case';

@Injectable()
export class DeleteCatUseCase implements IUseCase {
  execute(id: string) {
    return `This action removes a #${'id'} cat`;
  }
}
