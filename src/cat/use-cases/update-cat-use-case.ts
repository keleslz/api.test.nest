import { Injectable } from '@nestjs/common';
import { IRepository } from 'src/core/data/repositories/i-repository';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { ICRUDRepository } from 'src/core/data/repositories/i-crud-repository';
import { Cat } from 'src/entities/cat.entity';
@Injectable()
export class UpdateCatUseCase {
  constructor(private readonly catRepository: ICRUDRepository<Cat>) {}
// TODO implementer doctrine ORM
  execute(id: string, updateCatDto: UpdateCatDto): string {
    // this.catRepository.create(updateCatDto); // DOit passer par une entité
    return `This action updates a #${'id'} cat`;
  }
}
