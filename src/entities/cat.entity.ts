import { IEntity } from 'src/domain/entities/i-entity';

export class Cat implements IEntity {
  constructor(private readonly type?: string, private readonly name?: string) {}
}
