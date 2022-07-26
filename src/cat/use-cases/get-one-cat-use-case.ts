import { Injectable } from '@nestjs/common';
import { Cat } from 'src/core/data/models/entities/cat';

@Injectable()
export class GetOneCatUseCase {
  execute(id: string): Cat[] {
    // REpository
    return [];
  }
}
