import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() messageDto: CreateMessageDto) : string {
    return this.messageService.create(messageDto).toString();
  }

  @Get()
  findAll() : string {
    return 'Convertir les blocs de controller en Response, voir si la doc prevoit quelque chose';// this.messageService.findAll();
  }
}
