import { Module } from '@nestjs/common';
import { CatModule } from 'src/cat/cat.module';
import { MessageModule } from 'src/message/message.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
