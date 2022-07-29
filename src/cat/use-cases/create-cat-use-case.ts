import { Injectable } from '@nestjs/common';
import { Cat } from 'src/core/data/models/entities/cat';
import { ICreateDto } from 'src/core/domain/dto/i-create-dto';
import { IUseCase } from '../../core/domain/use-cases/i-use-case';

@Injectable()
export class CreateCatUseCase implements IUseCase<Cat> {
  public execute(createDto: ICreateDto) {
    // createCatDto.name = 'a-name';
    // createCatDto.type = 'a-type';
    return new Cat();
  }
}
