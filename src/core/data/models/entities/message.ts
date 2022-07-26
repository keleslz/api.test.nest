import { IEntity } from 'src/core/data/models/entities/i-entity';

export class Message implements IEntity {
  constructor(
    private readonly id?: string,
    private readonly content?: string,
    private readonly createdAt?: string
  ) {}
}
