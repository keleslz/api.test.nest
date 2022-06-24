import { ICreateDto } from '../dto/ICreateDto';
import { IUpdateDto } from '../dto/IUpdateDto';

export interface ICrudService {
  create(createDto: ICreateDto): void;
  update(updateDto: IUpdateDto): void;
  findAll(): void;
  findOne(): void;
  remove(): void;
}
