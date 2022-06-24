import { ICreateDto } from '../dto/i-create-dto';
import { IUpdateDto } from '../dto/i-update-dto';

export interface ICrudService {
  create(createDto: ICreateDto): void;
  update(id: string, updateDto: IUpdateDto): void;
  findAll(): void;
  findOne(id: string): void;
  remove(id: string): void;
}
