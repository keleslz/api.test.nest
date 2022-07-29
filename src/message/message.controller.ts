import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common' ;

import { JsonResponse } from 'src/core/domain/services/json-response';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() messageDto: CreateMessageDto) : string {
    return JsonResponse.from(this.messageService.create(messageDto));
  }

  @Get()
  findAll() : string {
    return JsonResponse.from(this.messageService.findAll());
  }
}
