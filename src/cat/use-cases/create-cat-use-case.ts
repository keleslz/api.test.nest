import { Injectable } from '@nestjs/common';
import { ICreateDto } from 'src/core/domain/dto/i-create-dto';
import { IUseCase } from '../../core/domain/use-cases/i-use-case';

@Injectable()
export class CreateCatUseCase implements IUseCase{
  public execute(createDto: ICreateDto) {
    // createCatDto.name = 'a-name';
    // createCatDto.type = 'a-type';
  }
}
