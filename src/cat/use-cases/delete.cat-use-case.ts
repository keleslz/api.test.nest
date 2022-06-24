import { Injectable } from '@nestjs/common';
import { IUseCase } from 'src/domain/use-cases/i-use-case';

@Injectable()
export class DeleteCatUseCase implements IUseCase {
  execute() {
    return `This action removes a #${'id'} cat`;
  }
}
