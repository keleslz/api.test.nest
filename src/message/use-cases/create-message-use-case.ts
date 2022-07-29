import { Injectable } from '@nestjs/common';
import { Message } from 'src/core/data/models/entities/message';
import { IUseCase } from '../../core/domain/use-cases/i-use-case';
import { CreateMessageDto } from '../dto/create-message.dto';

@Injectable()
export class CreateMessageUseCase implements IUseCase<Message> {
  public execute(createMessageDto: CreateMessageDto) {
    // createMessageDto.name = 'a-name';
    // createMessageDto.type = 'a-type';
    return new Message('1', 'message content', new Date());
  }
}
