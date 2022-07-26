import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { CreateMessageUseCase } from './use-cases/create-message-use-case';
import { GetAllMessageUseCase } from './use-cases/get-all-message-use-case';
import { MessageRepository } from 'src/data/MessageRepository';

const useCases= [
  CreateMessageUseCase,
  GetAllMessageUseCase,
] ;

const repositories = [
  MessageRepository
]

@Module({
  controllers: [MessageController],
  providers: [MessageService, ...useCases, ...repositories],
})
export class MessageModule {}
