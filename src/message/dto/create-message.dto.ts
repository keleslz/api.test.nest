import { ICreateDto } from 'src/core/domain/dto/i-create-dto';

export class CreateMessageDto implements ICreateDto {
  public id: string;
  public name: string;
  public content: string;
}
