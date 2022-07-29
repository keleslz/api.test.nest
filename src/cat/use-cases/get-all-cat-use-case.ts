import { Injectable } from '@nestjs/common';
import { Cat } from 'src/core/data/models/entities/cat';

@Injectable()
export class GetAllCatUseCase {
  execute() {
    // REpository
    return [];
  }
}
