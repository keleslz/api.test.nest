import { Injectable } from '@nestjs/common';
import { Cat } from '../../entities/cat.entity';

@Injectable()
export class GetAllCatUseCase {
  execute(): Cat[] {
    // REpository
    return [];
  }
}
