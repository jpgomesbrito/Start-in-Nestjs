import { IsString, IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsString() //validando se é uma string
  @IsNotEmpty() //obrigatorio
  text: string;
}
