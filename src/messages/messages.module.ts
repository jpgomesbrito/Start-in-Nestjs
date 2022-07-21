import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { MessagesController } from './messages.controller';
import { AppService } from '../app.service';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
