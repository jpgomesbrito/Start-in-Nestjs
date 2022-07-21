import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'First Message',
    },
    {
      id: 2,
      text: 'Second Message',
    },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((message) => message?.id === id);

    if (!message) {
      throw Error(`Message with ID ${id} not found`);
    }
    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length;

    const message: Message = {
      id,
      ...messageDto, //copia toda as propriedades
    };
    this.messages.push(message);
    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((message) => message?.id === id);

    if (index < 0) {
      throw Error(`Message with ID ${id} not found`);
    }

    const message: Message = {
      id,
      ...messageDto, //copia toda as propriedades
    };

    this.messages[index] = message;

    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((message) => message?.id === id);

    if (index < 0) {
      throw Error(`Message with ID ${id} not found`);
    }

    delete this.messages[index];

    return true;
  }
}
