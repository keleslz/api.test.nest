import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { CatRepository } from 'src/data/CatRepository';
import { IUseCase } from 'src/core/domain/use-cases/i-use-case';
import { Cat } from 'src/core/data/models/entities/cat';

@Injectable()
export class UpdateCatUseCase implements IUseCase<Cat> {
  constructor(private readonly catRepository: CatRepository) {}

  execute(id: string, updateCatDto: UpdateCatDto) {
    // this.catRepository.create(updateCatDto); // DOit passer par une entité
    return new Cat();
  }
}
