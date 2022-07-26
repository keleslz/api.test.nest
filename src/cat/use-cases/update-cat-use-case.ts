import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { ICRUDRepository } from 'src/core/data/repositories/i-crud-repository';
import { Cat } from 'src/core/data/models/entities/cat';
import { CatRepository } from 'src/data/CatRepository';

@Injectable()
export class UpdateCatUseCase {
  constructor(private readonly catRepository: CatRepository) {}
// TODO implementer doctrine ORM
  execute(id: string, updateCatDto: UpdateCatDto): string {
    // this.catRepository.create(updateCatDto); // DOit passer par une entité
    return `This action updates a #${'id'} cat`;
  }
}
