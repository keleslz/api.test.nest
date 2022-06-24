import { Injectable } from '@nestjs/common';
import { Cat } from '../../entities/cat.entity';

@Injectable()
export class GetOneCatUseCase {
  execute(id: string): Cat[] {
    // REpository
    return [];
  }
}
