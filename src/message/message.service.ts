import { Injectable } from '@nestjs/common';
import { Message } from 'src/core/data/models/entities/message';
import { ICreateDto } from 'src/core/domain/dto/i-create-dto';
import { ICrudService } from 'src/core/domain/services/i-crud-service';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateMessageUseCase } from './use-cases/create-message-use-case';
import { GetAllMessageUseCase } from './use-cases/get-all-message-use-case';

@Injectable()
export class MessageService
  implements Pick<ICrudService<Message>, 'create' | 'findAll'>
{
  constructor(
    private readonly createMessageUseCase: CreateMessageUseCase,
    private readonly getAllMessageUseCase: GetAllMessageUseCase,
  ) {}

  public create(createDto: CreateMessageDto) {
    return this.createMessageUseCase.execute(createDto);
  }

  public findAll(): Message[] {
    return this.getAllMessageUseCase.execute();
  }
}
