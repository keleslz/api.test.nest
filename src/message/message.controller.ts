import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() messageDto: CreateMessageDto) {
    return this.messageService.create(messageDto);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }
}
