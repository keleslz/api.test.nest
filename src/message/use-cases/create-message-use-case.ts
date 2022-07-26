import { Injectable } from '@nestjs/common';
import { IUseCase } from '../../core/domain/use-cases/i-use-case';
import { CreateMessageDto } from '../dto/create-message.dto';

@Injectable()
export class CreateMessageUseCase implements IUseCase {
  public execute(createMessageDto: CreateMessageDto) : boolean {
    // createMessageDto.name = 'a-name';
    // createMessageDto.type = 'a-type';
    return true;
  }
}
