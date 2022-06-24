import { Injectable } from '@nestjs/common';
import { Cat } from '../entities/cat.entity';

@Injectable()
export class GetOneCatUseCase {
  execute(): Cat[] {
    // REpository
    return [];
  }

  findOne(/* id: number */): Cat {
    // Repository
    return new Cat();
  }
}
