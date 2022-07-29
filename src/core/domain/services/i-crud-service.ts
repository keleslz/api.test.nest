import { ICreateDto } from '../dto/i-create-dto';
import { IUpdateDto } from '../dto/i-update-dto';

export interface ICrudService<Entity> {
  create(createDto: ICreateDto): Entity;
  update(id: string, updateDto: IUpdateDto): Entity;
  findAll(): Entity[];
  findOne(id: string): Entity | null;
  remove(id: string): Entity;
}
