import { Injectable } from '@nestjs/common';
import { Message } from 'src/core/data/models/entities/message';

@Injectable()
export class GetAllMessageUseCase {
  execute(): Message[] {
    // REpository
    return [];
  }
}
