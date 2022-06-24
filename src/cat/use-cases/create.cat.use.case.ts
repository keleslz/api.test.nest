import { Injectable } from '@nestjs/common';
import { IUseCase } from '../../domain/use-cases/i.use.case';

@Injectable()
export class CreateCatUseCase implements IUseCase {
  public execute(/* createCatDto: CreateCatDto */) {
    // createCatDto.name = 'a-name';
    // createCatDto.type = 'a-type';
  }
}
